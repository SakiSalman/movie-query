import { createSlice } from "@reduxjs/toolkit";
import { showFetch } from "./showsApi";


export const showSlice = createSlice({
    name : 'show',
    initialState : {
        shows : [],
        error : null,
        status : 'idle',
        message : null,
        loader : false
    },
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(showFetch.pending, (state, {type, payload})=> {
            return {
                ...state,
                status : 'loading',
                loader : true
            }
        })
        
        .addCase(showFetch.fulfilled, (state, {type, payload})=> {
          state.shows = payload
          state.loader = false
        })
        
    }
})


export const {} = showSlice.actions

// export default reducers

export default  showSlice.reducer