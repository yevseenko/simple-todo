import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TodoForm, TodoList } from './components'
import { mapActionsToProps } from './actions/map_actions'
import './stylesheets/App.css';

class App extends PureComponent {
  render() {
    const { todos, inputValue, visibilityFilter } = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <h3>Very simple todolist</h3>
        </div>
        <div className="Todo-App">
          <TodoForm onUserSubmit={(value) => this.props.addTodo(value)}
            inputClear={() => this.props.inputClear()}
            onInputChange={(value) => this.props.inputChange(value)}
            inputValue={inputValue}/>
          <TodoList todos={todos} visibilityFilter={visibilityFilter}
            removeTodo={(id) => this.props.removeTodo(id)}
            toggleTodo={(id) => this.props.toggleTodo(id)}
            setFilter={(filter) => this.props.setFilter(filter)}/>
        </div>
      </div>
    );
  }
}

const mapStateToprops = (state) => {
  return {
    todos: state.todos,
    inputValue: state.inputValue,
    visibilityFilter: state.visibilityFilter
  }
}

export default connect(mapStateToprops, mapActionsToProps)(App);
