import React, { Component } from 'react';
import CoursesLayout from '../components/courses-layout';
import Categories from '../../categories/components/categories';
import Header from '../../header/components/header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectCourse, loadCourses } from '../../actions';
import ModalCourseDetail from '../../modal-course-detail/components/modal-course-detail';

class Courses extends Component {

  componentDidMount () {
    this.props.loadCourses();
  }

  render () {
    return (
      <CoursesLayout>
        <Header />
        {
          this.props.categories &&
          <Categories
          categories={this.props.categories}
          onCourseSelected={this.props.selectCourse}
          />
        }

        {
          this.props.selectedCourse &&
          <ModalCourseDetail>
            <h1>{this.props.selectedCourse.title}</h1>
          </ModalCourseDetail>
        }

      </CoursesLayout>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    selectedCourse: state.selectedCourse
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    selectCourse,
    loadCourses }
  , dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
