export function todosReducer(state = [], action) {
  switch (action.type) {
    case 'RECEIVE_DATA':
      let dataArr = [];
      dataArr.push(
        ...Object.keys(action.payload)
          .map(id => ({ id, text: action.payload[id].text, isComplete: false }))
      );
      return dataArr;
    case 'ADD_TODO_ASYNC':
      return [
        ...state,
        action.payload
      ]
    default: return state;
  }
}