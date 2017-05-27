import database from '../data/database';

export function toggleTodoMiddleware({ getState, dispatch }) {
  return (next) => (action) => {
    if (action.type === 'TOGGLE_TODO') {
      const todoRef = database.ref('/todos/' + action.payload.id);

      const toggle = {
        isComplete: !action.payload.isComplete
      }

      todoRef.update(toggle);

      dispatch({ type: 'TOGGLE_TODO_ASYNC', payload: action.payload });
    }
    return next(action);
  }
}