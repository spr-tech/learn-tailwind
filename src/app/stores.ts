import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todoSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

// describing the type of the store
export type RootState = ReturnType<typeof store.getState>;

//describing the type of the store dispatch function
export type AppDispatch = typeof store.dispatch;
