import { createStore, combineReducers, applyMiddleware } from 'redux';

import { todosReducer } from './reducers/todos_reducer';

import data from './data/database';

const appReducer = combineReducers({
  todos: todosReducer
});

function dataLoadingMiddleware({ getState, dispatch }) {
  return (next) => (action) => {
    if (action.type === 'LOAD_DATA') {
      console.log('Data receive...')
      loadData().then(data => {
        dispatch({ type: 'RECEIVE_DATA', payload: data });
      })
      
    }
    return next(action);
  }
}

function loadData() {
  return new Promise((resolve, reject) => {
    data.on('value', snap => { resolve(snap.val()) });
  });
}

const store = createStore(appReducer, applyMiddleware(dataLoadingMiddleware));

window.store = store;

Object.defineProperty(window, 'state', {
  get() {
    return store.getState();
  }
});

export default store;