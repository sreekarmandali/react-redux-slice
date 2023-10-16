import  { createSlice } from "@reduxjs/toolkit"

const initialCartState = {
    counter: 0,
    cartInvisible:true
}

const cartReducer = {
    increment : (state) => {
        state.counter++
    },
    decrement : (state) => {
        state.counter--
    },
    toggle : (state) => {
        state.cartInvisible = !state.cartInvisible
    }
}

const cartSlice = createSlice({name:'Cart', reducers:cartReducer, initialState:initialCartState})
export  default cartSlice