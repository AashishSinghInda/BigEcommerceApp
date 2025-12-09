import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import cookies from 'js-cookie'

// thunk ak redux toolkit me functionality jisa use api se data likalane ki liye hota hai jo  data ham hamare app me global use kar kare jab bhi thunk ka use karte hai tho hame extraReducers ka use karte hai  extraReducers ka use thunk se data fetch ke liye use hota hai 

let apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEURL;

export const fetchCart = createAsyncThunk(
    'cart/fetchCart',
    async ()=>{
        const response = await axios.post(`${apiBaseUrl}cart/view-cart`,{}, {
            headers : {
                Authorization : `Bearer ${cookies.get('TOKEN') ?? ''}`
            }
        });
        let finalData = await response.data;

        return finalData;
    }
)




const initialState = {
    cart : [],
    imagePath : '',
}


export const cartSlice = createSlice({
    name : "cart",
    initialState,

    // reducres me ye functionality tab use hoti hai jab hame  add to cart delete cart use kare abhi hamne api bana rakhi hai 
   // reducers : {
    //    cartData : (state, reqData) => {
    //      let {payload} = reqData
     //     state.cart.push(payload.cart)
     //   }
  //  },
     reducers : {

     },
     extraReducers : (builder) =>{
        // Add reducers for additional action types here, and handle loading state as needed

        builder.addCase(fetchCart.fulfilled, (state, action)=>{
            //Add user to the state array

            state.cart = action.payload.cartData ?? [],
            state.imagePath = action.payload.staticPath ?? '';
        })
     }

})


export const {cartData} = cartSlice.actions

export default cartSlice.reducer;