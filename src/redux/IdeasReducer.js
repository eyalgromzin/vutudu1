import React from 'react';
import { combineReducers } from "redux";

const initialState = {
  currentIdeaIndex: 0,
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
  }],
  currentIdea: {
    id: '',
    subject: '',
    content: '',
    likes: 0,
    dislikes: 0,
    hard: 0,
    easy: 0,
    minTime: 0,
    maxTime: 0
  }
};

export const SAVE_IDEAS = "SAVE_IDEAS";
export const CHANGE_CURRENT_IDEA = "CHANGE_CURRENT_IDEA";

function reducer(state = initialState, action) {
  switch(action.type) {
    case SAVE_IDEAS:
      return {
        ideas: action.payload
      };
      break;
    case CHANGE_CURRENT_IDEA:
      currentIdea = ideas[action.payload];
      
      break;
    default:
      return state;
  }
}

export default reducer;