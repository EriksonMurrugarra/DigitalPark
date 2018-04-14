import { combineReducers } from 'redux';
import CoursesReducer from './reducer_courses';
import SelectedCourseReducer from './reducer_selected_course';
import CourseDetailReducer from './reducer_course_detail';
import BlogEntriesReducer from './reducer_blog_entries';

const rootReducer = combineReducers({
  categories: CoursesReducer,
  selectedCourse: SelectedCourseReducer,
  courseDetail: CourseDetailReducer,
  blogEntries: BlogEntriesReducer
});

export default rootReducer;
