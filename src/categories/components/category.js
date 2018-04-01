import React from 'react';
import CourseList from '../../courselist/components/courselist';

const Category = props => {
  return (
    <div>
      <h2>{props.title}</h2>
      <CourseList courses={props.courses} />
    </div>
  )
}

export default Category;
