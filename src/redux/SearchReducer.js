import React from 'react';
import { combineReducers } from "redux";

const initialState = {
    place: ''
  };

  function reducer(state = initialState, action) {
    switch(action.type) {
      case 'SET_PLACE':
        const s = 'asd';
        return {
          place: action.payload 
        };
      default:
        return state;
    }
  }

  export default reducer;
  // export default  combineReducers({ searchCriterias: reducer });;
