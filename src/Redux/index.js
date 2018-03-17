import { combineReducers } from 'redux'
import user from './User';
import adminReducer from './adminReducer'
import exploreReducer from './exploreReducer';

export default combineReducers({
  user,
  adminReducer,
  exploreReducer
})