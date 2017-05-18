import {
  RECEIVE_LOGGED_DAYS,
  RECEIVE_LOGGED_INFO
} from '../constants';

const initialState = {
  numberOfLoggedDays: 0,
  isLogged: false,
};

export default function (state = initialState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case RECEIVE_LOGGED_DAYS:
      newState.numberOfLoggedDays = action.numberOfLoggedDays;
      break;

    case RECEIVE_LOGGED_INFO:
      newState.isLogged = action.isLogged;
      break;

    default:
      return state;

  }

  return newState;

}
