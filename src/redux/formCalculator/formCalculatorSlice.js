import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    formActive: 'homeCalculator grid',
}

export const formCalculatorSlice = createSlice ({
    name: 'form',
    initialState,
    reducers: {
        setFormActive: (state) => {
            state.formActive = 'homeCalculator grid active';
        },
        setFormNotActive: (state) => {
            state.formActive = 'homeCalculator grid';
        }
    },
})

export const {setFormActive} = formCalculatorSlice.actions
export const {setFormNotActive} = formCalculatorSlice.actions
export default formCalculatorSlice.reducer