export function inputValueReducer(state = '', action) {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return state = action.payload;
    case 'FORM_APPLY':
      return state = '';
    default: return state;
  }
}
