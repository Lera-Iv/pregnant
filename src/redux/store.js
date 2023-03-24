import { configureStore } from "@reduxjs/toolkit";
import {formCalculatorSlice} from "./formCalculator/formCalculatorSlice";
import  {postSice}  from "./blog/postSlice";
import {todoSlise} from "./chekList/todoSlice"

export const store = configureStore({
    reducer: {
        form: formCalculatorSlice.reducer,
        post: postSice.reducer,
        todos: todoSlise.reducer,
    },
});