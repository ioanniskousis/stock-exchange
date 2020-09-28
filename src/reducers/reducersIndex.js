import { combineReducers } from 'redux';
import symbolsReducer from './symbolsReducer';
// import filter from './filter';

const rootReducer = combineReducers({
  symbols: symbolsReducer,
  // filter,
});

export default rootReducer;
