import  { createSlice } from "@reduxjs/toolkit"
const initialItemsState = {
    items: [],
    totalQuantity:0
}

const itemReducer = {
    addItem : (state, payloadData) => {
        let items = state.items
        const {payload} = payloadData
         const existIndex = items.findIndex(item => item.id === payload.id)
         state.totalQuantity++
         if(existIndex > -1) {
            items[existIndex].quantity++
            items[existIndex].total+= parseInt(items[existIndex].price)

         }else {
            items.push({
                id: payload.id,
                quantity:1,
                total: parseInt(payload.price),
                price: parseInt(payload.price),
                title: payload.title
            })
         }
       state.items = items
    },
    removeItem : (state, payloadData) => {
        const {payload} = payloadData
        let items = state.items
        state.totalQuantity--
        const existIndex = items.findIndex(item => item.id === payload)
        if (existIndex > -1 && items[existIndex].quantity > 1) {
            items[existIndex].quantity--
            items[existIndex].total-= items[existIndex].price
        } else {
            items = items.filter(item => item.id != payload)
        }
       state.items = items
    },
    replaceCart: (state, payloadData) => {
        const {payload} = payloadData 
       return payload
    }
}

const sendRequest = (cartitems) => {

    return async () => { 
         let response = await fetch('http://localhost:3000/cartSave',{
        method:'POST',
        body: JSON.stringify(cartitems),
        headers: {"Content-Type": "application/json"}
      })
      const responseData = await response.json()
      if(Object.keys(responseData).length> 0){
        console.log("saved successfully")
      }
      else {
        console.log("failed")
      }
  
    
}
    

}
const getCartItem = () => {
    return async (dispatch) => {
        let responseData = await fetch('http://localhost:3000/cartGet',{
            method:'GET',
            headers: {"Content-Type": "application/json"}
          })
          const response = await responseData.json()
          if(Object.keys(response).length> 0){
            console.log("data fetched successfully")
          }
          console.log(response.item)
          dispatch(itemSlice.actions.replaceCart(response.item))
    }
}
 const itemSlice = createSlice({name:'Item', reducers:itemReducer, initialState:initialItemsState})
 
export const sendRequestData = sendRequest
export const getRequestData = getCartItem
export default itemSlice