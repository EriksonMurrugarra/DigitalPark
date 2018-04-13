import React, { Component } from 'react';

class CourseDetail extends Component {

  render () {
    const courseId = this.props.match.params.courseId;
    return (
      <div>
        <h1> Course Detail { courseId }  </h1>
      </div>
    );
  }

}

export default CourseDetail;
