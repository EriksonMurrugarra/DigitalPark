import React, { Component } from 'react';
// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadCourseDetail } from '../../actions';

class CourseDetail extends Component {

  componentDidMount () {
    const courseId = this.props.match.params.courseId;
    this.props.loadCourseDetail();
  }

  render () {
    const { course } = this.props;
    return (
      <div>
        {
          course && <div>
            <h1>{ course.title } </h1>
            <img alt="course image" src={course.image} />
            <p>{ course.description }</p>
          </div>
        }

        {
          !course &&
            <h1> Loading </h1>
        }
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    course: state.courseDetail
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadCourseDetail
   }
  , dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetail);
