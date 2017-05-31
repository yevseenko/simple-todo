export const mapActionsToProps = (dispatch) => {
  return {
    addTodo(value) {
      dispatch({ type: 'ADD_TODO', payload: value })
    },

    removeTodo(id) {
      dispatch({ type: 'REMOVE_TODO', payload: id })
    },

    toggleTodo(id) {
      dispatch({ type: 'TOGGLE_TODO', payload: id })
    },

    inputChange(value) {
      dispatch({ type: 'INPUT_CHANGE', payload: value })
    },

    inputClear() {
      dispatch({ type: 'INPUT_CLEAR' })
    },

    setFilter(filter) {
      dispatch({ type: 'SET_VISIBILITY_FILTER', filter })
    },

    getVisibleTodos(todos, filter) {
      switch (filter) {
        case 'SHOW_ALL':
          return todos;
        case 'SHOW_COMPLETED':
          return todos.filter(
            t => t.isComplete
          );
        case 'SHOW_ACTIVE':
          return todos.filter(
            t => !t.isComplete
          );
        default: return todos;
      }
    }
  }
}
