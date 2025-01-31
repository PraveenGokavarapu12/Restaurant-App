import { createSlice } from "@reduxjs/toolkit";

export const  orderSlice=createSlice({
    name:'order',
    initialState:{
        orders:[]
    },
    reducers:{
        placeOrder:(state,action)=>{
            state.orders.push(action.payload)
        }
    }

})

export const {placeOrder}=orderSlice.actions
export default orderSlice.reducer