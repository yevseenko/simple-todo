import React, { PureComponent } from 'react';

export class TodoForm extends PureComponent {
  render() {
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.onUserSubmit(e.target.children[0].value);
        }} >
          <input className="todo-input" type="text"
            onChange={(e) => this.props.onInputChange(e.target.value)} />
        </form>
      </div>
    )
  }
}