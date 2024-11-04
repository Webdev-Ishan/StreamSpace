import {configureStore} from '@reduxjs/toolkit';
import sidebarReducer from '../Features/SidebarFeature/sidebarslice';
import subscribeReducer from '../Features/Subscribe/subscribeslice'
import searchReducer from '../Features/Searchkeyword/searchslice'
export const store = configureStore({
    reducer: {sidebarReducer,subscribeReducer,searchReducer},
    
    
})