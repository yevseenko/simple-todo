import React, { PureComponent } from 'react';
import { TodoItem } from './TodoItem'

export class TodoList extends PureComponent {
  render() {
    if (this.props.todos.length === 0 || this.props.todos === null) {
      return <div> Loading... </div>
    } else {
      return (
        <div>
          <ul>
            {
              this.props.todos.map(item => {
                return (
                  <TodoItem removeTodo={(id) => this.props.removeTodo(id)}
                    toggleTodo={(id) => this.props.toggleTodo(id)}
                    isComplete={item.isComplete}
                    key={item.id}
                    {...item} />
                )
              })
            }
          </ul>
        </div>
      )
    }
  }
}