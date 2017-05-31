import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TodoForm, TodoList, Header } from './components'
import { mapActionsToProps } from './actions/map_actions'
import './stylesheets/App.css';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="Todo-App">
          <TodoForm onUserSubmit={(value) => this.props.addTodo(value)}
            inputClear={() => this.props.inputClear()}
            onInputChange={(value) => this.props.inputChange(value)}
            inputValue={this.props.inputValue} />
          <TodoList todos={this.props.todos} visibilityFilter={this.props.visibilityFilter}
            getVisibleTodos={(todos, filter) => this.props.getVisibleTodos(todos, filter)}
            removeTodo={(id) => this.props.removeTodo(id)}
            toggleTodo={(id) => this.props.toggleTodo(id)}
            setFilter={(filter) => this.props.setFilter(filter)} />
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
