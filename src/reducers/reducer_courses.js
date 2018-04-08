import { LOAD_COURSES } from '../actions';

export default (state = null, action) => {

  switch(action.type) {
    case LOAD_COURSES: {
      return action.payload.data;
    }
  }

  return state;


}
