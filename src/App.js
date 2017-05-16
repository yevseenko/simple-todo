import React, { Component } from 'react';
import './stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Very simple todolist</h2>
        </div>
        <div>
          <ul>
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
