export const mapActionsToProps = (dispatch) => {
  return {
    addTodo(value) {
      dispatch({
        type: 'ADD_TODO',
        payload: value
      })
    },

    removeTodo(id) {
      dispatch({
        type: 'REMOVE_TODO',
        payload: id
      })
    },

    toggleTodo(id) {
      console.log(id);
      dispatch({
        type: 'TOGGLE_TODO',
        payload: id
      })
    },

    inputChange(value) {
      dispatch({
        type: 'INPUT_CHANGE',
        payload: value
      })
    },

    inputClear() {
      dispatch({
        type: 'INPUT_CLEAR'
      })
    }
  }
}
