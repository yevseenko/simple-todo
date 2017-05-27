import database from '../data/database';

export function dataLoadingMiddleware({ getState, dispatch }) {
  return (next) => (action) => {
    if (action.type === 'LOAD_DATA') {
      const data = database.ref('/todos');

      data.once('value').then(snap => {
        if (snap.val()) {
          dispatch({ type: 'RECEIVE_DATA', payload: snap.val() })
        }
      })
    }
    return next(action);
  }
}