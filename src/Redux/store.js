import { createStore, applyMiddleware } from 'redux';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import reducer from './index';


let store = createStore(reducer, applyMiddleware(reduxPromiseMiddleware()));
// console.log(store.getState());

export default store;
