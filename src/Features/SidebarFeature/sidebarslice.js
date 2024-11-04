import {createSlice} from '@reduxjs/toolkit'

const initialState={
    visibility: false,
}

export const sidebarslice=createSlice({

    name:"sidebar",
    initialState,
    reducers:{

         togglesidebar:(state)=>{
         state.visibility=!state.visibility;
        },
    }
})

export const{togglesidebar}=sidebarslice.actions;
export default sidebarslice.reducer;