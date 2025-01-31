import { configureStore } from "@reduxjs/toolkit";
import  filterReducer  from "../redux/FilterSlice";
import  orderReducer  from "../redux/OrderSlice";
export const store=configureStore({
    reducer:{
        filter:filterReducer,
        order:orderReducer
    }
    
})

