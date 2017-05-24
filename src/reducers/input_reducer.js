export function inputValueReducer(state = 'input new todo here', action) {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return action.payload;
    default: return state;
  }
}
