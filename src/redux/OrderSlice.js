import { createSlice } from "@reduxjs/toolkit";

export const  orderSlice=createSlice({
    name:'order',
    initialState:{
        orders:[]
    },
    reducers:{
        placeOrder:(state,action)=>{
            state.orders.push(action.payload)
        },
        removeOrder:(state,action)=>{
            state.orders=state.orders.filter(order=>order.id!==action.payload)
        }
    }

})

export const {placeOrder,removeOrder}=orderSlice.actions
export default orderSlice.reducer