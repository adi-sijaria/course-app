import { configureStore } from "@reduxjs/toolkit";
import  CartSlice  from "./slices/Cartslice";
import  Productslice  from "./slices/Productslice";
import Wishlistslice from "./slices/Wishlistslice";
const store=configureStore({
    reducer:{
        cart:CartSlice,
        product:Productslice,
        wishlist:Wishlistslice
    }
});
export default store;