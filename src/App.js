import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './stylesheets/App.css';

class App extends PureComponent {
  render() {
    const { todos } = this.props;

    let TodosComponent;

    if (todos.length === 0) {
      TodosComponent = <div> Loading... </div>
    } else {
      TodosComponent = todos.map(item => <li key={item.id}>{item.text}</li>)
    }

    return (
      <div className="App">
        <div className="App-header">
          <h2>Very simple todolist</h2>
        </div>
        <div className="Todo-App">
          <ul>
            {TodosComponent}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToprops = (state) => {
  return state.todos;
}

export default connect(mapStateToprops)(App);
