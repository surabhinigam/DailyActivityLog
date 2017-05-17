// Required libraries
import { combineReducers } from 'redux';

// Requried files
import daysReducer from './days-reducer';

const rootReducer = combineReducers({
  //auth: require('./auth').default,
  daysState: daysReducer
});

export default rootReducer;

