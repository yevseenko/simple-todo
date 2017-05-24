import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TodoForm, TodoList } from './components'
import './stylesheets/App.css';

class App extends PureComponent {
  render() {
    const { todos } = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <h2>Very simple todolist</h2>
        </div>
        <div className="Todo-App">
          <TodoForm onUserSubmit={(value) => this.props.addTodo(value)}
            onInputChange={(value) => this.props.inputChange(value)}
            inputClear={() => this.props.inputClear()}/>
          <TodoList todos={todos} />
        </div>
      </div>
    );
  }
}

const mapStateToprops = (state) => {
  return  { todos: state.todos };
}

const mapActionsToProps = (dispatch) => {
  return {
    addTodo(val) {
      dispatch({
        type: 'ADD_TODO',
        payload: val
      })
    },
    inputChange(value) {
      dispatch({
        type: 'INPUT_CHANGE',
        payload: value
      })
    }
  }
}

export default connect(mapStateToprops, mapActionsToProps)(App);
