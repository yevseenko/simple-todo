export function todosReducer(state = [], action) {
  switch (action.type) {
    case 'RECEIVE_DATA':
      if (action.payload === null) {
        return state;
      }

      let arr = [];

      arr.push(
        ...Object.keys(action.payload)
          .map(id => ({ id, text: action.payload[id].text, isComplete: action.payload[id].isComplete }))
      );

      return arr;
    case 'ADD_TODO_ASYNC':
      return [
        ...state,
        action.payload
      ]
    case 'REMOVE_TODO_ASYNC':
      console.log('todo has been removed', action.payload);
      const removeIndex = state.findIndex(item => item.id === action.payload)
      return [
        ...state.slice(0, removeIndex),
        ...state.slice(removeIndex + 1)
      ]
    case 'TOGGLE_TODO_ASYNC':
      console.log('todo is toggled', action.payload);
      return state.map(todo => {
        if (todo.id !== action.payload.id) {
          return todo;
        }

        return {
          ...todo,
          isComplete: !todo.isComplete
        }
      });
    default: return state;
  }
}