import React, { PureComponent } from 'react';
import { FilterLink } from './FilterLink';

export class BottomLinks extends PureComponent {
  render() {
    return (
      <div className="todo-links">
        <p>
          Show:
              {' '}
          <FilterLink
            visibilityFilter={this.props.visibilityFilter}
            filter='SHOW_ALL'
            setFilter={(filter) => this.props.setFilter(filter)}>
            All
              </FilterLink>
          {' '}
          <FilterLink
            visibilityFilter={this.props.visibilityFilter}
            filter='SHOW_ACTIVE'
            setFilter={(filter) => this.props.setFilter(filter)}>
            Active
              </FilterLink>
          {' '}
          <FilterLink
            visibilityFilter={this.props.visibilityFilter}
            filter='SHOW_COMPLETED'
            setFilter={(filter) => this.props.setFilter(filter)}>
            Completed
              </FilterLink>
        </p>
      </div>
    )
  }
}