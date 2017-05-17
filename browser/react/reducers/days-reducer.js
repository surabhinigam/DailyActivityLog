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
      newState.days = action.days;
      break;

    case UPDATE_DAY:
      newState.selectedDay = action.selectedDay;
      break;

    default:
      return state;

  }

  return newState;

}
