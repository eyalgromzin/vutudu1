import React from 'react';
import { combineReducers } from "redux";

const initialState = {
  currentPage: 'SHOW_IDEA'
};

export const CHANGE_PAGE_TO_CREATE_IDEA = "CHANGE_PAGE_TO_CREATE_IDEA";

function reducer(state = initialState, action) {
  switch(action.type) {
    case CHANGE_PAGE_TO_CREATE_IDEA:
      return {
        currentPage: 'CREATE_IDEA'
      };
    case 'DECREMENT':
      return {
        currentPage: 'SHOW_IDEA'
      };
    default:
      return state;
  }
}

export default reducer;