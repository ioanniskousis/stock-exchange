import { combineReducers } from 'redux';
import instrumentsReducer from './instrumentsReducer';

const rootReducer = combineReducers({
  exchangesData: instrumentsReducer,
});

export default rootReducer;
