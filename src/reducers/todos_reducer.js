import data from '../data/database';

const initialState = {
  todos: []
}

const generateId = () => Math.floor(Math.random() * 100000)

export function todosReducer(state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_DATA':
      return {
        todos: action.payload
      }
    case 'ADD_TODO':
      data.push({
        id: generateId(),
        text: action.payload,
        isComplete: false
      });
    default: return state;
  }
};