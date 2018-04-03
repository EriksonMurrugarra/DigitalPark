import boto3
import StringIO
import zipfile
import mimetypes

s3 = boto3.resource('s3')

#declare buckets
digitalpark_bucket = s3.Bucket('www.digitalpark.io')
build_bucket = s3.Bucket('digitalpark-build')

#download from build bucket
digitalpark_zip = StringIO.StringIO()
build_bucket.download_fileobj('digitalpark.zip', digitalpark_zip)

#push to production bucket
with zipfile.ZipFile(digitalpark_zip) as myzip:
    for nm in myzip.namelist():
        obj = myzip.open(nm)
        digitalpark_bucket.upload_fileobj(obj, nm,
          ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
        digitalpark_bucket.Object(nm).Acl().put(ACL='public-read')