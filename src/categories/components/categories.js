import React from 'react';
import Category from './category';

const Categories = props => {
  return (
    <div>
      {
        props.categories.map(category => {
          return <Category
            key={category.id}
            title={category.title}
            courses={category.courses}
            onCourseSelected={props.onCourseSelected}
          />
        })
      }
    </div>
  )
}

export default Categories;
