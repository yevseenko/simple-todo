import React, { PureComponent } from 'react';

export class TodoForm extends PureComponent {
  render() {
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.inputClear();
          this.props.onUserSubmit(this.props.inputValue);
        }} >
          <input className="todo-input" type="text"
            value={this.props.inputValue}
            onChange={(e) => this.props.onInputChange(e.target.value)} />
        </form>
      </div>
    )
  }
}