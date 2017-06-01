import database from '../data/database';

export function toggleTodoMiddleware({ getState, dispatch }) {
  return (next) => (action) => {
    if (action.type === 'TOGGLE_TODO') {
      const todosRef = database.ref('/todos/' + action.payload.id);

      const toggle = {
        isComplete: !action.payload.isComplete
      }

      todosRef.update(toggle)
    }
    return next(action);
  }
}