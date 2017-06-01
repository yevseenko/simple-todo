import database from '../data/database';

export function dataLoadingMiddleware({ getState, dispatch }) {
  return (next) => (action) => {
    if (action.type === 'LOAD_DATA') {
      const databaseRef = database.ref();

      databaseRef.on('value', (snap) => {
          if (!snap.exists()) {
            dispatch({ type: 'RECEIVE_DATA', payload: {} })
          }

          dispatch({ type: 'RECEIVE_DATA', payload: snap.child('/todos').val() })
      })
    }
    return next(action);
  }
}