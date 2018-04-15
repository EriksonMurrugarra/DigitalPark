import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import './course.css';


class Course extends PureComponent {

  render () {
    const courseLink = `/course/${this.props.coursecode}`;
    return (
      <div className="Course">
        <Link to={courseLink}>
        <div className="Course-cover">
          <img
            src={ this.props.image }
            alt={ this.props.image }
            width={260}
            height={180}
            className="Course-image"
          />
          <label className="Course-tags">{this.props.tags}</label>
          <h3 className="Course-title">{this.props.name}</h3>
        </div>
        </Link>
      </div>
    )
  }
}

Course.propTypes = {
  image: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Course;
