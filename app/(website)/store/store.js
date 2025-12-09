import { configureStore } from "@reduxjs/toolkit";
import  loginSlice  from "../slice/userSlice"; // login slice ko {} ke bina call karna hai 
import cartSlice from "../slice/cartSlice"


export const store = configureStore({
    reducer : {
        login : loginSlice,
        cart :  cartSlice,
    },
})