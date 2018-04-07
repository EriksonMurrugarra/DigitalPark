export default (state = null, action) => {
  switch(action.type) {
    case 'COURSE_SELECTED':
      return action.payload;
  }

  return state;
}
