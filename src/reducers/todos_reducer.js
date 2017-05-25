export function todosReducer(state = [], action) {
  switch (action.type) {
    case 'RECEIVE_DATA':
      let dataArr = [];

      for (let key in action.payload) {
        dataArr.push({ id: key, text: action.payload[key].text, isComplete: false })
      }

      return dataArr;
    case 'ADD_TODO_ASYNC':
      return [
        ...state,
        action.payload
      ]
    default: return state;
  }
}