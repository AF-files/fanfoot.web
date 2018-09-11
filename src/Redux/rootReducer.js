import {combineReducers} from 'redux';
import playerReducer from './playerReducer.js';

const rootReducer = combineReducers({
  playersInList: playerReducer
});

export default rootReducer;