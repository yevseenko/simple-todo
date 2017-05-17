const initialState = {
  todos: []
}

export function todosReducer(state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_DATA':
      return {
        todos: action.payload
      };
    default: return state;
  }
};