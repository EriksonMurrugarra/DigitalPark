import axios from 'axios';

export const COURSE_SELECTED = 'COURSE_SELECTED';
export const LOAD_COURSES = 'LOAD_COURSES';

export function selectCourse(course) {
  return {
    type: COURSE_SELECTED,
    payload: course
  };
}

export function loadCourses() {
  const request = axios.get(APP_API);

  return {
    type: LOAD_COURSES,
    payload: request
  }
}
