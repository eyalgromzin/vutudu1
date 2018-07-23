import React from 'react';
import { combineReducers } from "redux";
import searchReducer from './SearchReducer'
import countReducer from './CountReducer'

const rootReducer = combineReducers({
  searchReducer: searchReducer,
  countReducer: countReducer
})
 
export default rootReducer