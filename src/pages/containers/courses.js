import React, { Component } from 'react';
import CoursesLayout from '../components/courses-layout';
import Categories from '../../categories/components/categories';
// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectCourse, loadCourses } from '../../actions';
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
          />
        }
        {
          !this.props.categories &&
            <h1> Loading... </h1>
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
