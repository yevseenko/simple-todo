import { createStore, combineReducers, applyMiddleware } from 'redux';

import { todosReducer } from './reducers/todos_reducer';
import { inputValueReducer } from './reducers/input_reducer';
import { dataLoadingMiddleware } from './middleware/data_loading';
import { addTodoMiddleware } from './middleware/add_todo_middleware';

const appReducer = combineReducers({
  todos: todosReducer,
  inputValue: inputValueReducer
});

const store = createStore(appReducer, applyMiddleware(dataLoadingMiddleware, addTodoMiddleware));

window.store = store;

Object.defineProperty(window, 'state', {
  get() {
    return store.getState();
  }
});

export default store;