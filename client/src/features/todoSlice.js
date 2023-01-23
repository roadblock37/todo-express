import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "./customFetch";
import axios from "axios";


const getAllTodos = createAsyncThunk(
  "todos/getAllTodos",
  async (_, thunkAPI) => {
    try {
      const url = "api/v1/todos";
      let response = await axios(url);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("could not fetch data");
    }
  }
);

const initialState = {
  defaultState: [],
  isLoading: true,
};
 

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTodos.pending, (state) => {
        state.isLoading = true;
        console.log("isLoading : true");
      })
      .addCase(getAllTodos.fulfilled, (state, action) => {
        console.log(action);
        console.log(action.payload);
        state.isLoading = false;
        state.defaultState = action.payload;
      })
      .addCase(getAllTodos.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });
  },
});

export const { createTodo, deleteTodo, updateTodo, getTodo } =
  todoSlice.actions;
export default todoSlice.reducer;


