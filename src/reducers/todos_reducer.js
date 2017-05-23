import data from '../data/database';

const initialState = {
  todos: []
}

export function todosReducer(state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_DATA':
      return {
        todos: action.payload
      }
    case 'ADD_TODO':
      data.push({
        text: action.payload,
        isComplete: false
      });
    default: return state;
  }
};