import React, { PureComponent } from 'react';

export class FilterLink extends PureComponent {
  render() {
    if (this.props.filter === this.props.visibilityFilter) {
      return (<span>{this.props.children}</span>);
    }
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