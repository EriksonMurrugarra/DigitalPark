import React from 'react';
import CourseList from '../../courselist/components/courselist';

const Category = ({title, courses}) => {
  return (
    <div>
      <h2>{title}</h2>
      <CourseList courses={courses}/>
    </div>
  )
}

export default Category;
