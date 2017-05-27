// import data from '../data/database';

export function toggleTodoMiddleware({ getState, dispatch }) {
  return (next) => (action) => {
    if (action.type === 'TOGGLE_TODO') {
      console.log('handling_toggle_todo', action.payload);
      dispatch({ type: 'TOGGLE_TODO_ASYNC', payload: action.payload });
    }
    return next(action);
  }
}