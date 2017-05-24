import data from '../data/database';

export function todosReducer(state = [], action) {
  data.on('value', snap => {
    state = Object.values(snap.val());
  })
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
};