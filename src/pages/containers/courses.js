import React, { Component } from 'react';
import CoursesLayout from '../components/courses-layout';
import Categories from '../../categories/components/categories';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectCourse, loadCourses } from '../../actions';
import ModalCourseDetail from '../../modal-course-detail/components/modal-course-detail';
import Search from '../../search/components/search';

class Courses extends Component {

  componentDidMount () {
    this.props.loadCourses();
  }

  render () {
    return (
      <CoursesLayout>
        <div style={{ textAlign: 'center'}}>
          <h2> Que quieres aprender Hoy? </h2>
          <Search />
        </div>
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
