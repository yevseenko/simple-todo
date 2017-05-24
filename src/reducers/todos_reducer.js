export function todosReducer(state = [], action) {
  switch (action.type) {
    case 'RECEIVE_DATA':
      return action.payload
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.payload,
          isComplete: false
        }
      ]
    default: return state;
  }
}