import React from 'react';
import { combineReducers } from "redux";
import searchReducer from './SearchReducer'
import countReducer from './CountReducer'
import commonReducer from './CommonReducer'
import ideasReducer from './IdeasReducer'

const rootReducer = combineReducers({
  searchReducer: searchReducer,
  countReducer: countReducer,
  commonReducer: commonReducer,
  ideasReducer: ideasReducer,
})
 
export default rootReducer