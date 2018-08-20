import React from 'react';
import { combineReducers } from "redux";
import update from "react-addons-update";

const initialState = {
  currentIdeaIndex: 0,
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

export const LIKE_IDEA = "LIKE_IDEA";
export const DISLIKE_IDEA = "DISLIKE_IDEA";

export const ADD_TIME = "ADD_TIME";
export const REDUCE_TIME = "REDUCE_TIME";

export const ADD_DIFFICULTY = "ADD_HARD_TO_IDEA";
export const REDUCE_DIFFICULTY = "ADD_EASY_TO_IDEA";


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
    case LIKE_IDEA: //if it wont work , try to return a full ideas array with the changed item 
    var currentIdea = state.ideas[state.currentIdeaIndex];
    currentIdea.likes = currentIdea.likes + 1;
    
    return { 
      ...state,
      currentIdea
    }

    case DISLIKE_IDEA:
    var currentIdea = state.ideas[state.currentIdeaIndex];
    currentIdea.dislikes = currentIdea.dislikes + 1;
    
    return { 
      ...state,
      currentIdea
    }

    case ADD_TIME:
    var currentIdea = state.ideas[state.currentIdeaIndex];
    currentIdea.maxTime = currentIdea.maxTime + 1;
    
    return { 
      ...state,
      currentIdea
    }
    case REDUCE_TIME:
    var currentIdea = state.ideas[state.currentIdeaIndex];
    currentIdea.minTime = currentIdea.minTime - 1;
    
    return { 
      ...state,
      currentIdea
    }
    case ADD_DIFFICULTY:
    var currentIdea = state.ideas[state.currentIdeaIndex];
    currentIdea.hardCount = currentIdea.hardCount + 1;
    
    return { 
      ...state,
      currentIdea
    }
    case REDUCE_DIFFICULTY:
    var currentIdea = state.ideas[state.currentIdeaIndex];
    currentIdea.easyCount = currentIdea.easyCount + 1;
    
    return { 
      ...state,
      currentIdea
    }

    default:
      return state;
  }
}

export default reducer;