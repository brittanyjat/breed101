import { combineReducers } from 'redux'
import frontEndReducer from './frontEndReducer';
import adminReducer from './adminReducer'

export default combineReducers({
  frontEndReducer,
  adminReducer
})