import { configureStore } from "@reduxjs/toolkit";
import showReducer from "../features/shows/showSlice";

// create store
const store = configureStore({
    reducer : {
        show : showReducer
    }
})

export default store