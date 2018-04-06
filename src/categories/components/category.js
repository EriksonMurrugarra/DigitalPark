import React from 'react';
import CourseList from '../../courselist/components/courselist';

const Category = ({title, courses, onCourseSelected}) => {
  return (
    <div>
      <h2>{title}</h2>
      <CourseList courses={courses} onCourseSelected={onCourseSelected}/>
    </div>
  )
}

export default Category;
