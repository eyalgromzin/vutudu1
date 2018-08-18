import React from 'react';
import { combineReducers } from "redux";

const initialState = {
  currentPage: 'SHOW_IDEA'
};

export const CHANGE_PAGE_TO_CREATE_IDEA = "CHANGE_PAGE_TO_CREATE_IDEA";
export const CHANGE_PAGE_TO_SHOW_IDEAS = "CHANGE_PAGE_TO_SHOW_IDEAS";

function reducer(state = initialState, action) {
  switch(action.type) {
    case CHANGE_PAGE_TO_CREATE_IDEA:
      return {
        ...state,
        currentPage: 'CREATE_IDEA'
      };
    case CHANGE_PAGE_TO_SHOW_IDEAS:
      return {
        ...state,
        currentPage: 'SHOW_IDEAS'
      };
    default:
      return state;
  }
}

export default reducer;