import {configureStore} from '@reduxjs/toolkit'

// import { apiSlice } from './api/apiSlice'
import todoSlice from './todoSlice'


export const store = configureStore({
    reducer: {
        todos: todoSlice,
        // [apiSlice.reducerPath]: apiSlice.reducer
    },
    // middleware: getDefaultMiddleware => getDefaultMiddleware().concact(apiSlice.middleware)
})