import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const getTodoAsync = createAsyncThunk(
  "todos/getTodosAsync",
  async () => {
    const resp = await fetch("http://localhost:3000/todos");
    if (resp.ok) {
      const todos = await resp.json();
      return { todos };
    }
  }
);

export const addTodoAsync = createAsyncThunk(
  "todos/addTodoAsync",
  async (payload) => {
    const resp = await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: payload.title }),
    });

    if (resp.ok) {
      const todo = await resp.json();
      return { todo };
    }
  }
);

export const toggleCompleteAsync = createAsyncThunk(
  "todos/completeTodoAsync",
  async (payload) => {
    const resp = await fetch(`http://localhost:3000/todos/${payload.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: payload.completed }),
    });

    if (resp.ok) {
      const todo = await resp.json();
      return { todo };
    }
  }
);

export const deleteTodoAsync = createAsyncThunk(
  "todos/deleteTodoAsync",
  async (payload) => {
    const resp = await fetch(`http://localhost:3000/todos/${payload.id}`, {
      method: "DELETE",
    });

    if (resp.ok) {
      return { id: payload.id };
    }
  }
);

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
  extraReducers: {
    [getTodoAsync.fulfilled]: (state, action) => {
      return action.payload.todos;
    },
    [addTodoAsync.fulfilled]: (state, action) => {
      state.push(action.payload.todo);
    },
    [toggleCompleteAsync.fulfilled]: (state, action) => {
      const index = state.findIndex(
        (todo) => todo.id === action.payload.todo.id
      );

      state[index].completed = action.payload.todo.completed;
    },
    [deleteTodoAsync.fulfilled]: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, toggleCompleted, deleteTodo, editTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
