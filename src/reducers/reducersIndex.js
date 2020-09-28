import { combineReducers } from 'redux';
import instrumentsReducer from './instrumentsReducer';
// import filter from './filter';

const rootReducer = combineReducers({
  instruments: instrumentsReducer,
  // filter,
});

export default rootReducer;
