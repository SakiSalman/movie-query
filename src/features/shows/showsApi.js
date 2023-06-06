import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const showFetch = createAsyncThunk(
    'show/fethall',
    async (data,rejectWithValue ) => {
        try {
            const response = await axios.get('https://api.tvmaze.com/search/shows?q=all')
            return response.data
        } catch (error) {

            console.log(error);
        }

    }
)