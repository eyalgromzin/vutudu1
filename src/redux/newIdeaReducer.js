import React from 'react';
import { combineReducers } from "redux";
import update from "react-addons-update";
import { NEW_IDEA_SET_MIN_PEOPLE, NEW_IDEA_SET_MAX_PEOPLE } from 'redux/types'

const initialState = {
  idea:{
    title: 'title',
    content: 'content content',
    minTime: 0,
    maxTime: 0,
    minNumOfPeople: 1,
    maxNumOfPeople: 2,
    place: "",
    tags: [],
  }
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case NEW_IDEA_SET_MIN_PEOPLE:
      return {
        ...state,
        minNumOfPeople: action.payload
      };
    case NEW_IDEA_SET_MAX_PEOPLE:
      return {
        ...state,
        maxNumOfPeople: action.payload
      };
    default:
      return state;
  }
}

export default reducer;