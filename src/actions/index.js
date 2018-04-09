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
  const request = axios.get('https://0cb7i36obc.execute-api.us-east-1.amazonaws.com/dev/courses-catalog');

  return {
    type: LOAD_COURSES,
    payload: request
  }
}
