import React, { PureComponent } from 'react';

export class TodoItem extends PureComponent {
  render() {
    return (
      <li className={this.props.isComplete ? 'completed' : '' }>
        <span className="squaredThree">
          <input type="checkbox" id={this.props.id}
            className="todo-checkbox squaredTwo"
            checked={this.props.isComplete}
            onChange={(id) => this.props.toggleTodo({id: this.props.id, isComplete: this.props.isComplete})} />
          <label htmlFor={this.props.id}></label>
        </span>

        {this.props.text}

        <a href="#" onClick={(id) => this.props.removeTodo(this.props.id)}>
          <span className="close rounded black delete-item"></span>
        </a>
      </li>
    )
  }
}
