import React, { Component } from 'react';
import './stylesheets/App.css';

import data from './data/database';

class App extends Component {
  render() {
    // const ref = data.ref('todos/');
    // ref.on('value', snapshot => snapshot.val().map(item => {
    //   const itemId = item.id,
    //         itemText = item.text,
    //         itemCom = item.isComplete;
    //   console.log(itemText, itemId, itemCom);
    // }));

    const { todos } = this.props;

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
            <li>{ todos } </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
