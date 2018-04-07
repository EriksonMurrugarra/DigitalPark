export function selectCourse(course) {
  return {
    type: 'COURSE_SELECTED',
    payload: course
  };
}


export function loadCourses() {
  return {
    type: 'LOAD_COURSES',
    payload: {}
  }
}
