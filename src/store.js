import { configureStore } from "@reduxjs/toolkit";
import toDoListReducer from "./redux/reducers/todolist.reducer";

export const store = configureStore({
  reducer: {
    toDo: toDoListReducer,
  },
});
