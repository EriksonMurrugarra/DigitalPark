import axios from 'axios';

export const COURSE_SELECTED = 'COURSE_SELECTED';
export const LOAD_COURSES = 'LOAD_COURSES';
export const LOAD_COURSE_DETAIL = 'LOAD_COURSE_DETAIL';
export const LOAD_BLOG_ENTRIES = 'LOAD_BLOG_ENTRIES';

export function selectCourse(course) {
  return {
    type: COURSE_SELECTED,
    payload: course
  };
}

export function loadCourses() {
  const request = axios.get(`${APP_API}/courses`);

  return {
    type: LOAD_COURSES,
    payload: request
  };
}

export function loadCourseDetail (courseId) {
  const request = axios.get(`${APP_API}/courses/${courseId}`);

  return {
    type: LOAD_COURSE_DETAIL,
    payload: request
  };
}

export function loadBlogEntries() {
  const request = axios.get(`${APP_API}/blogs`);

  return {
    type: LOAD_BLOG_ENTRIES,
    payload: request
  };
}
