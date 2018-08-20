import React from 'react';
import { combineReducers } from "redux";
import update from "react-addons-update";

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

export const SET_MIN_TIME = "SET_MIN_TIME";
export const SET_MAX_TIME = "SET_MAX_TIME";
export const SET_PLACE = "SET_PLACE";
export const SET_MIN_PEOPLE = "SET_MIN_PEOPLE";
export const SET_MAX_PEOPLE = "SET_MAX_PEOPLE";

function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_MIN_PEOPLE:
      return {
        ...state,
        minNumOfPeople: action.payload
      };
    case SET_MAX_PEOPLE:
      return {
        ...state,
        maxNumOfPeople: action.payload
      };
    default:
      return state;
  }
}

export default reducer;