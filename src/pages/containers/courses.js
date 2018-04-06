import React, { Component } from 'react';
import CoursesLayout from '../components/courses-layout';
import Categories from '../../categories/components/categories';
import Header from '../../header/components/header';
import { connect } from 'react-redux';
import ModalCourseDetail from '../../modal-course-detail/components/modal-course-detail';

class Courses extends Component {

  state = {
    selectedCourse: null
  }

  showCourseDetailModal = (course) => {
    this.setState({
      selectedCourse: course
    })
  }

  render () {
    return (
      <CoursesLayout>
        <Header />
        <Categories
          categories={this.props.categories}
          onCourseSelected={this.showCourseDetailModal}
          />
        <ModalCourseDetail>
          { this.state.selectedCourse &&
            <h1> {this.state.selectedCourse.title}</h1>
          }
        </ModalCourseDetail>
      </CoursesLayout>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps)(Courses);
