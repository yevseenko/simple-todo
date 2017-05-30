import React, { PureComponent } from 'react';
import { TodoItem } from './TodoItem';
import { BottomLinks } from './BottomLinks'

export class TodoList extends PureComponent {
  render() {
    if (!this.props.todos.length) {
      return <div className="todo-info"> Nothing to view... </div>
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
          <BottomLinks
            visibilityFilter={this.props.visibilityFilter}
            setFilter={(filter) => this.props.setFilter(filter)} />
        </div>
      )
    }
  }
}