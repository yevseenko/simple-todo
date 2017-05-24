import React, { PureComponent } from 'react';

export class TodoForm extends PureComponent {
  render() {
    return (
      <div>
        <form onSubmit={(evt) => {
          evt.preventDefault();
          this.props.onUserSubmit(evt.target.children[0].value);
        }} >
          <input onChange={(e) => this.props.onInputChange(e.target.value)} className="todo-input" type="text" />
        </form>
      </div>
    )
  }
}