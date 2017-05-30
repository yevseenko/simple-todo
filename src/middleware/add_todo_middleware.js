import database from '../data/database';

export function addTodoMiddleware({ getState, dispatch }) {
  return (next) => (action) => {
    if (action.type === 'ADD_TODO') {
      const todosRef = database.ref('/todos')
      
      const todoData = {
        text: action.payload,
        isComplete: false
      }

      const newTodoKey = todosRef.push().key;

      const updates = {};
      updates[newTodoKey] = todoData;

      todosRef.update(updates);

      dispatch({ type: 'ADD_TODO_ASYNC', payload: {...todoData, id: newTodoKey} });
    }
    return next(action);
  }
}