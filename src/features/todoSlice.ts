import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Todo = {
  id: string;
  text: string;
};

//this describes how the data should be at first .. the starting value
const initialState: Todo[] = [];

//this builds the slice
const todoSlice = createSlice({
  name: "todos",
  initialState,

  reducers: {
    // payloadAction carries the note , describing the data and the object type
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload); // the payload is the action item we are passing to the state
    },

    removeTodo: (state, action: PayloadAction<string>) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

//pulling out the note makers-- meant for the component
export const { addTodo, removeTodo } = todoSlice.actions;

// the rule book-- meant for the store
export default todoSlice.reducer;
