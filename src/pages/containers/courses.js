import React, { Component } from 'react';
import CoursesLayout from '../components/courses-layout';
import Categories from '../../categories/components/categories';
import Header from '../../header/components/header';

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

export default Courses;
