import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import './modal-course-detail.css';

class ModalCourseDetail extends Component {

  render () {
    return (
      createPortal(
      (<div className="ModalCourseDetail"> {this.props.children}</div>),
      document.getElementById('modal-course-detail')
      )
    );
  }
}

export default ModalCourseDetail;
