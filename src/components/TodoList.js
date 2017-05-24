import React, { PureComponent } from 'react';

const generateKey = () => Math.floor(Math.random() * 100000)

export class TodoList extends PureComponent {
  render() {
    if (this.props.todos.length === 0) {
      return <div> Loading... </div>
    } else {
      return (
        <div>
          <ul>
            {this.props.todos.map(item => <li key={generateKey()}>{item.text}</li>)}
          </ul>
        </div>
      )
    }
  }
}