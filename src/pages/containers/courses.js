import React, { Component } from 'react';
import CoursesLayout from '../components/courses-layout';
import Categories from '../../categories/components/categories';
import Header from '../../header/components/header';
import { connect } from 'react-redux';

class Courses extends Component {

  render () {
    return (
      <CoursesLayout>
        <Header />
        <Categories categories={this.props.categories} />
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
