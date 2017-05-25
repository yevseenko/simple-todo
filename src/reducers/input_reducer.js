export function inputValueReducer(state = '', action) {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return action.payload;
    case 'INPUT_CLEAR':
      return state = '';
    default: return state;
  }
}
