import React from 'react';
import { combineReducers } from "redux";

const initialState = {
    place: ''
  };

  function reducer(state = initialState, action) {
    switch(action.type) {
      case 'SET_PLACE':
        return {
          place: state.payload
        };
      default:
        return state;
    }
  }

  export default  combineReducers({ searchCriterias: reducer });;