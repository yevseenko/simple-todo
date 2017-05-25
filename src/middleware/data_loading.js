import data from '../data/database';

export function dataLoadingMiddleware({ getState, dispatch }) {
  return (next) => (action) => {
    if (action.type === 'LOAD_DATA') {
      data.once('value').then(snap => {
        dispatch({ type: 'RECEIVE_DATA', payload: snap.val() });
      })
    }
    return next(action);
  }
}