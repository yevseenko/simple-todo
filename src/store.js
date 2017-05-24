import { createStore, combineReducers, applyMiddleware } from 'redux';

import { todosReducer } from './reducers/todos_reducer';
import { inputValueReducer } from './reducers/input_reducer';

import data from './data/database';

const appReducer = combineReducers({
  todos: todosReducer,
  inputValue: inputValueReducer
});

function dataLoadingMiddleware({ getState, dispatch }) {
  return (next) => (action) => {
    if (action.type === 'LOAD_DATA') {
      data.once('value').then(snap => {
        dispatch({ type: 'RECEIVE_DATA', payload: Object.values(snap.val()) });
      })
    }
    return next(action);
  }
}

const store = createStore(appReducer, applyMiddleware(dataLoadingMiddleware));

window.store = store;

Object.defineProperty(window, 'state', {
  get() {
    return store.getState();
  }
});

export default store;