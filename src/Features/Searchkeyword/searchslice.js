import { createSlice } from "@reduxjs/toolkit";

const initialState={
    searchTerm:"",
}

export const searchSlice=createSlice(
    {
name:"searchslice",
initialState,
reducers:{

    addkeyword:(state,action)=>{
    state.searchTerm=action.payload.searchTerm
    },
}

    }
)

export const{addkeyword} = searchSlice.actions;
export default searchSlice.reducer;