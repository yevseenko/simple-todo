// import data from '../data/database';

export function removeTodoMiddleware({ getState, dispatch }) {
  return (next) => (action) => {
    if (action.type === 'REMOVE_TODO') {
      console.log('handling_remove_todo', action.payload);
      dispatch({ type: 'REMOVE_TODO_ASYNC', payload: action.payload });
    }
    return next(action);
  }
}