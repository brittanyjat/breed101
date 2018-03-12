import { combineReducers } from 'redux'
import user from './User';
import adminReducer from './adminReducer'

export default combineReducers({
  user,
  adminReducer
})