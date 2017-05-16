import { createStore, applyMiddleware, combineReducers } from 'redux';
import data from './data/database';

import { todosReducer } from './reducers/todos_reducer';
import { makeCounter } from './reducers/make_counter';

const appReducer = combineReducers({
  todos: (state = []) => state
});

function dataLoadingMiddleware({ getState, dispatch }) {
  return (next) => (action) => {
    if (action.type === 'LOAD_DATA') {
      console.log('call load data');
      loadData().then(data => {
        console.log('call receive data');
        dispatch({ type: 'RECEIVE_DATA', payload: data });
      });
    }
    return next(action);
  }
}
const store = createStore(
  appReducer,
  applyMiddleware(dataLoadingMiddleware)
);

function loadData() {
  return new Promise((resolve, reject) => {
    () => resolve(data);
  });
}

export default store;