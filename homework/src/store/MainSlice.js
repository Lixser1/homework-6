import {createSlice} from "@reduxjs/toolkit";


export const mainSlice = createSlice({
    name: "counter",
    initialState: {
        counter: 0,
    },
    reducers: {
        changeCounter: (state, action) => {
            state.counter = state.counter + 1;
        },
        minusCounter: (state, action) => {
            state.counter = Math.max(0, state.counter - 1);
        },
        plusCounter: (state, action) => {
            state.counter = state.counter + 10;
        },
        megaMinusCounter: (state, action) => {
            state.counter = Math.max(0, state.counter - 10);
        },
        resetCounter: (state, action) => {
            state.counter = 0;
        }
    }
})
export const {resetCounter, changeCounter, minusCounter, megaMinusCounter, plusCounter} = mainSlice.actions;
export default mainSlice.reducer;