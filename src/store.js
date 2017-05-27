import { createStore, combineReducers, applyMiddleware } from 'redux';

import { todosReducer, inputValueReducer } from './reducers';
import { dataLoadingMiddleware, addTodoMiddleware, removeTodoMiddleware, toggleTodoMiddleware } from './middleware';

const appReducer = combineReducers({
  todos: todosReducer,
  inputValue: inputValueReducer
});

const store = createStore(appReducer, applyMiddleware(
  dataLoadingMiddleware,
  addTodoMiddleware,
  removeTodoMiddleware,
  toggleTodoMiddleware
));

window.store = store;

Object.defineProperty(window, 'state', {
  get() {
    return store.getState();
  }
});

export default store;