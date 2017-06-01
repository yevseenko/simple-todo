import database from '../data/database';

export function removeTodoMiddleware({ getState, dispatch }) {
  return (next) => (action) => {
    if (action.type === 'REMOVE_TODO') {

      const databaseRef = database.ref();

      let updates = {}
      updates['/todos/' + action.payload] = {};

      databaseRef.update(updates);
    }
    return next(action);
  }
}