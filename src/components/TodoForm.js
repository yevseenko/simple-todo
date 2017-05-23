import React, { PureComponent } from 'react';

export class TodoForm extends PureComponent {
  render() {
    return (
      <form onSubmit={ () => {console.log('form submited')}}>
        <input className="todo-input" type="text" />
      </form>
    )
  }
}