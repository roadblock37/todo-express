// import RTK Query methods from react specific entry point
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// define single API slice object
export const apiSlice = createApi({
    // Cache reducer expects to be added at 'stateAPI
    reducerPath: 'api',

    // all requests will have URLS starting with '/api/v1'
    baseQuery: fetchBaseQuery({baseUrl: '/api/v1'}),

    // the endpoints represent operations and requests for this server
    endpoints: builder => ({
        // the getTodos endpoint is a query operation that returns all todos
        getTodos: builder.query({
            // the URL for the request is /api/v1/todos
            query: () => '/todos'
        })
    })
})

// export the auto-generated hook for the 'getTodos' query endpoint
export const {useGetTodosQuery} = apiSlice