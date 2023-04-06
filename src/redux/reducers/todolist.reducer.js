import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  toDoList: [],
};

const toDoListReducer = createReducer(initialState, {
  GET_CATEGORY_LIST: (state, action) => {
    return {
      ...state,
    };
  },
});

export default toDoListReducer;
