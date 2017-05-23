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
          <TodoForm />
          <TodoList todos={todos} />
        </div>
      </div>
    );
  }
}

const mapStateToprops = (state) => {
  return state.todos;
}

export default connect(mapStateToprops)(App);
