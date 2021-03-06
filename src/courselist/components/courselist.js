import React from 'react';
import Course from './course';
import './courselist.css';

const CourseList = props => (
  <div className="CourseList">
    {
      props.courses.map(course => {
        return <Course
          key={course.coursecode} {...course}/>
      })
    }
  </div>
)

export default CourseList;
