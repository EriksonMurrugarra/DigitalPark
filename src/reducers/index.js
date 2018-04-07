import { combineReducers } from 'redux';
import CoursesReducer from './reducer_courses';
import SelectedCourseReducer from './reducer_selected_course';

const rootReducer = combineReducers({
  categories: CoursesReducer,
  selectedCourse: SelectedCourseReducer
});

export default rootReducer;
