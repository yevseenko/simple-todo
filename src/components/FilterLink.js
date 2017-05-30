import React, { PureComponent } from 'react';

export class FilterLink extends PureComponent {
  render() {
    return (
      <a href="#" onClick={
        (e) => {
          e.preventDefault();
          this.props.setFilter(this.props.filter);
        }}
      >{this.props.children}
      </a>
    )
  }
}