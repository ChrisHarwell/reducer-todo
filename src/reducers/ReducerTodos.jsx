import React from "react";
import {v4 as uuidv4} from 'uuid'

/**
 * ### STEP 1 - Build a simple reducer and initial state
 * 
 * - In a folder called `reducers` add a reducer file and build out a simple reducer with just a default return for now
 * - In the same file, build your initial state object that has a list of todos with the following shape:
 * 
 * ```js
 * {
 * item: 'Learn about reducers',
 *  completed: false,
 *  id: 3892987589
 * }
 * ``` 
*/

// export the initial state object
export const todoState = { 
  item: "Learn about reducers",
  completed: false,
  id: uuidv4(),
};


// - Export the reducer
export const todoReducer = (state, action) => {
  switch(action.type) {
    case "TOGGLE_COMPLETED":
      return {
        ...state,
        completed: !state.completed
      };
      case "UPDATE_TITLE":
        return {
          ...state,
          title: action.payload,
          completed: false
        };
        default:
          return state;
  };
};