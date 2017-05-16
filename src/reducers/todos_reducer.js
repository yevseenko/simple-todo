const initialState = {
  todos: [
    {id: 1, text: 'First', isComplete: false},
    {id: 2, text: 'Second', isComplete: false},
    {id: 3, text: 'Third', isComplete: false}
  ]
}

function todosReducer(state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_DATA':
      return state;
    default: return state;
  }
}

export default todosReducer;