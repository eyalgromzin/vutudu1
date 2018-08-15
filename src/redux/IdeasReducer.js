import React from 'react';
import { combineReducers } from "redux";

const initialState = {
  ideas: [{
    id: '',
    subject: '',
    content: '',
    likes: 0,
    dislikes: 0,
    hard: 0,
    easy: 0,
    minTime: 0,
    maxTime: 0
  }]
};

export const SAVE_IDEAS = "SAVE_IDEAS";

function reducer(state = initialState, action) {
  switch(action.type) {
    case SAVE_IDEAS:
      return {
        ideas: action.payload
      };
    default:
      return state;
  }
}

export default reducer;