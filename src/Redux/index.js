import { combineReducers } from 'redux'
import user from './User';
import adminReducer from './adminReducer'
import exploreReducer from './exploreReducer';
import quiz from './quiz';

export default combineReducers({
  quiz,
  user,
  adminReducer,
  exploreReducer
})