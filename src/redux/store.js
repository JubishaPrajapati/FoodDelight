import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slice/cartSlice";
import CategorySlice from "./slice/categorySlice";
import SearchSlice from "./slice/searchSlice"

const Store = configureStore({
    reducer: {
        cart: CartSlice,
        category: CategorySlice,
        search: SearchSlice
    }
})

export default Store;