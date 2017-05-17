import data from '../data/database';

export function receiveData(state = [], action) {
  switch (action.type) {
    case 'RECEIVE_DATA_FROM_SERVER':
      return state + 1;
    default: return state;
  }
}
