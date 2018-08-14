import React from 'react';
import { combineReducers } from "redux";

const initialState = {
    place: '',
    time: 5,
    numOfPeople: 1,
    more: 'more'
  };

  function searchReducer(state = initialState, action) {
    switch(action.type) {
      case 'SET_PLACE':
        return {
          place: action.payload 
        };
      default:
        return state;
    }
  }

  export default searchReducer;
