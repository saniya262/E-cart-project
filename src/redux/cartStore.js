import productSlice from "./slice/productSlice";
import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./slice/wishlistSlice";
import cartslice from "./slice/cartslice";

// const { configureStore }= require("@reduxjs/toolkit");



const cartStore = configureStore({
    reducer:{
        productSlice,
        wishlistSlice,
        cartReducer:cartslice
    }
})

export default cartStore