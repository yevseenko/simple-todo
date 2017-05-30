import React, { PureComponent } from 'react';
import { TodoItem } from './TodoItem';
import { FilterLink } from './FilterLink';

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
          <div className="todo-links">
            <p>
              Show:
              {' '}
              <FilterLink filter='SHOW_ALL' setFilter={(filter) => this.props.setFilter(filter)}>All</FilterLink>
              {' '}
              <FilterLink filter='SHOW_ACTIVE' setFilter={(filter) => this.props.setFilter(filter)}>Active</FilterLink>
              {' '}
              <FilterLink filter='SHOW_COMPLETED' setFilter={(filter) => this.props.setFilter(filter)}>Completed</FilterLink>
            </p>
          </div>
        </div>
      )
    }
  }
}