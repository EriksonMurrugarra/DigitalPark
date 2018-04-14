import { LOAD_BLOG_ENTRIES } from '../actions';

export default (state = null, action) => {

  switch(action.type) {
    case LOAD_BLOG_ENTRIES: {
      return action.payload.data;
    }
  }

  return state;
}
