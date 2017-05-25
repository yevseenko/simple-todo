export const mapActionsToProps = (dispatch) => {
  return {
    addTodo(value) {
      dispatch({
        type: 'ADD_TODO',
        payload: value
      })
    },

    inputChange(value) {
      dispatch({
        type: 'INPUT_CHANGE',
        payload: value
      })
    }
  }
}
