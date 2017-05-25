import data from '../data/database';

export function addTodoMiddleware({ getState, dispatch }) {
  return (next) => (action) => {
    if (action.type === 'ADD_TODO') {
      
      const todoData = {
        text: action.payload,
        isComplete: false
      }

      const newTodoKey = data.push().key;

      const updates = {};
      updates[newTodoKey] = todoData;

      data.update(updates);

      dispatch({ type: 'ADD_TODO_ASYNC', payload: Object.assign({}, todoData, { id: newTodoKey }) });
    }
    return next(action);
  }
}