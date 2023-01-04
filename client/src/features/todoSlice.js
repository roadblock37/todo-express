import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const url = "/"


const initialState = {
    defaultState: [],
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {

    }
});

export default todoSlice.reducer;