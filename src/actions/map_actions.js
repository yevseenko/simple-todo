export const mapActionsToProps = (dispatch) => {
  return {
    addTodo(val) {
      dispatch({
        type: 'ADD_TODO',
        payload: val
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
