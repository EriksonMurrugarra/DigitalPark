import React from 'react';
import Category from './category';

const Categories = props => {
  return (
    <div>
      {
        props.categories.map(category => {
          return <Category
            key={category.catecode}
            title={category.title}
            courses={category.courses}
          />
        })
      }
    </div>
  )
}

export default Categories;
