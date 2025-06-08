import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slice/cartSlice"

const Store = configureStore({
    reducer: {
        cart: CartSlice
    }
})

export default Store;