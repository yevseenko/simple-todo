import React, { PureComponent } from 'react';

export class TodoList extends PureComponent {
  render() {
    if (this.props.todos.length === 0) {
      return <div> Loading... </div>
    } else {
      return (
        <div>
          <ul>
            {this.props.todos.map(item => <li key={item.id}>{item.text}</li>)}
          </ul>
        </div>
      )
    }
  }
}