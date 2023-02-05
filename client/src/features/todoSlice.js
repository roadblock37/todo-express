import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "./customFetch";
import axios from "axios";
import { getAllTodosThunk } from "./todoThunk";

export const getAllTodos = createAsyncThunk("todos/getTodos", getAllTodosThunk);

const initialState = {
  defaultState: [],
  isLoading: true,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    createTodo: () => {},
    deleteTodo: (state, action) => {
      const todoID = action.payload;
      state.defaultState = state.defaultState.filter(
        (todo) => todo.id !== todoID
      );
    },
    updateTodo: () => {},
    getTodo: () => {},
  },
  extraReducers: {
    [getAllTodos.fullfilled]: (state, { payload }) => {
      console.log(payload.todos);
      state.isLoading = false;
      state.defaultState = "data";
    },
    [getAllTodos.rejected]: (state, { payload }) => {
      state.isLoading = false;
      console.log(payload);
    },
    [getAllTodos.pending]: (state) => {
      state.isLoading = true;
    },
          builder.addCase(getTodos.fullfilled, (state, action) => {
            state.isLoading = false;
            state.defaultState = action.payload;
          });
        .addCase(getTodos.pending, (state) => {
          state.isLoading = false;
        })
      .addCase(getTodos.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });
  },
});

export const { createTodo, deleteTodo, updateTodo, getTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
