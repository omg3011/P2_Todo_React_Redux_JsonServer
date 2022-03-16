import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    //-- Reducer: AddTodo
    addTodo: (state, action) => {
      // create new todo object
      const newTodo = {
        id: nanoid(),
        title: action.payload.title,
        completed: false,
      };

      // push to state
      state.push(newTodo);
    },

    //-- Reducer: Toggle
    toggleCompleted: (state, action) => {
      // find index
      const selectedIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      // set flag
      state[selectedIndex].completed = action.payload.completed;
    },

    //-- Reducer: Delete
    deleteTodo: (state, action) => {
      // return a filter container
      return state.filter((item) => item.id !== action.payload.id);
    },

    //-- Reducer: Edit
    editTodo: (state, action) => {
      // find index
      const selectedIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      // set title
      state[selectedIndex].title = action.payload.title;
      // set flag
      state[selectedIndex].completed = action.payload.completed;
    },
  },
});

export const { addTodo, toggleCompleted, deleteTodo, editTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
