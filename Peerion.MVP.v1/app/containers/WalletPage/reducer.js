import { fromJS } from 'immutable';
import { SUCCESS_BALANCE } from './constants';

export const initialState = fromJS({
  username: '',
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case SUCCESS_BALANCE:
      return state.set('balance', action.balance);
    default:
      return state;
  }
}

export default homeReducer;
