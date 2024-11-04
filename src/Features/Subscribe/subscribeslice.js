import { createSlice } from "@reduxjs/toolkit";


const initialState={
    subscribed:false,
}

export const subscribeslice=createSlice({
name:"subscribed",
initialState,
reducers:{
    togglesubscribe:(state)=>{

state.subscribed=!state.subscribed;
    },
}



})

export const {togglesubscribe} =subscribeslice.actions;
export default subscribeslice.reducer;