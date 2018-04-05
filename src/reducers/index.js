import { combineReducers } from 'redux';
import CoursesReducer from './reducer_courses';

const rootReducer = combineReducers({
  categories: CoursesReducer
});

export default rootReducer;
