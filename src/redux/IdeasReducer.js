import React from 'react';
import { combineReducers } from "redux";

const initialState = {
  currentIdeaIndex: 0,
  // ideas: {
  //   id: '111',
  //   title: 'aaaa',
  //   content: 'content1',
  //   likes: 3,
  //   dislikes: 4,
  //   hardCount: 5,
  //   easyCount: 6,
  //   minTime: 7,
  //   maxTime: 8
  // }
  ideas: ([{
    id: '111',
    title: 'aaaa',
    content: 'content1',
    likes: 3,
    dislikes: 4,
    hardCount: 5,
    easyCount: 6,
    minTime: 7,
    maxTime: 8
  },
  {
    id: '222',
    title: 'bbbbb',
    content: 'content2',
    likes: 9,
    dislikes: 10,
    hardCount: 11,
    easyCount: 12,
    minTime: 13,
    maxTime: 14
  },
  {
    id: '333',
    title: 'ccc',
    content: 'content3',
    likes:  15,
    dislikes: 16,
    hardCount: 17,
    easyCount: 18,
    minTime: 19,
    maxTime: 20
  }])
  
};

export const SAVE_IDEAS = "SAVE_IDEAS";
export const CHANGE_CURRENT_IDEA_INDEX = "CHANGE_CURRENT_IDEA_INDEX";

function reducer(state = initialState, action) {
  switch(action.type) {
    case SAVE_IDEAS:
      return {
        ...state,
        ideas: action.payload,
      };
    case CHANGE_CURRENT_IDEA_INDEX:
    return{
        ...state,
        currentIdeaIndex: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;