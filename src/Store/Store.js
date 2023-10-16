import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './Cart-Slice'
import itemSlice from './Item-Slice';


const store = configureStore({
    reducer: {cart: cartSlice.reducer, item: itemSlice.reducer}
})

export default store;