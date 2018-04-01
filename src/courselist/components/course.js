import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './course.css';

class Course extends PureComponent {

  handleClick = (event) => {
    console.log(this.props.title)
  }

  render () {
    return (
      <div className="Course" onClick={this.handleClick}>
        <div className="Course-cover">
          <img
            src={ this.props.image }
            alt=""
            width={260}
            height={180}
            className="Course-image"
          />
          <label className="Course-tags">{this.props.tags}</label>
          <h3 className="Course-title">{this.props.title}</h3>
        </div>
      </div>
    )
  }
}

Course.propTypes = {
  image: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Course;
