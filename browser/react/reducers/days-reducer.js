import {
  RECEIVE_DAYS,
  UPDATE_DAY
} from '../constants';

const initialState = {
  days: [],
  selectedDay: {}
};

export default function (state = initialState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case RECEIVE_DAYS:
    console.log('inside reducer receive-days', action);
      newState.days = action.days;
      console.log('newstate days is: ', newState.days);
      break;

    case UPDATE_DAY:
      newState.selectedDay = action.day;
      break;

    default:
      return state;

  }

  return newState;

}
