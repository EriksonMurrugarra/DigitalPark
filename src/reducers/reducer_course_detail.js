import { LOAD_COURSE_DETAIL } from '../actions';

export default (state = null, action) => {

  switch(action.type) {
    case LOAD_COURSE_DETAIL: {
      return action.payload.data;
    }
  }

  return state;
}
