import React from 'react';
import { combineReducers } from "redux";

const initialState = {
    place: ''
  };

  function reducer(state = initialState, action) {
    switch(action.type) {
      case 'SET_PLACE':
        return {
          place: action.payload 
        };
      default:
        return state;
    }
  }

  export default reducer;
