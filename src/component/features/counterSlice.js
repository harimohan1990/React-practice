import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    value:0
}
export const counterSlice = createSlice({
name:'counter',
initialState,
reducers:{
    increment :(state)=>{
        state.value = state.value+1;
    },
    incrementByFive:(state,action)=>{
        state.value = state.value+action.payload;
    },
    decrementByFive:(state,action)=>{
        state.value = state.value-action.payload;
    }
}
})
export const {increment,incrementByFive,decrementByFive} = counterSlice.actions;

export default counterSlice.reducer;