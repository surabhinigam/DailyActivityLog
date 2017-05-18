// Required libraries
import { combineReducers } from 'redux';

// Requried files
import daysReducer from './days-reducer';
import bodyReducer from './body-reducer';

const rootReducer = combineReducers({
  //auth: require('./auth').default,
  daysState: daysReducer,
  bodyState: bodyReducer
});

export default rootReducer;

