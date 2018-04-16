import boto3
import StringIO
import zipfile
import mimetypes

def lambda_handler(event, context):
    #declare SNS
    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:us-east-1:470187922491:DeployDigitalParkTopic')

    location = {
      "bucketName": "digitalpark-build",
      "objectKey": "digitalpark.zip"
    }

    try:
      #extract from codepipeline
      job = event.get('CodePipeline.job')

      if job:
        for artifact in job["data"]["inputArtifacts"]:
          if artifact["name"] == "MyAppBuild":
            location = artifact["location"]["s3Location"]

      print "Building DigitalPark from " + str(location)

      #declare buckets
      s3 = boto3.resource('s3')
      digitalpark_bucket = s3.Bucket('digitalpark.io')
      build_bucket = s3.Bucket(location["bucketName"])

      #download from build bucket
      digitalpark_zip = StringIO.StringIO()
      build_bucket.download_fileobj(location["objectKey"], digitalpark_zip)

      #push to production bucket
      with zipfile.ZipFile(digitalpark_zip) as myzip:
          for nm in myzip.namelist():
              obj = myzip.open(nm)
              digitalpark_bucket.upload_fileobj(obj, nm,
                ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
              digitalpark_bucket.Object(nm).Acl().put(ACL='public-read')

      topic.publish(Subject='DigitalPark Deployment Status. SUCCESS', Message='DigitalPark Deployment successfully!')

      #codepipeline finish
      if job:
        codepipeline = boto3.client('codepipeline')
        codepipeline.put_job_success_result(jobId=job["id"])

      return 'DigitalPark Deployed!'
    except:
      topic.publish(Subject='DigitalPark Deployment Status. FAILED', Message='DigitalPark Deployment failed!')
      raise
