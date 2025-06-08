import { createSlice } from "@reduxjs/toolkit";

const CategorySlice = createSlice({
    name: "category",
    initialState: {
        category: "All"   //by default will be all
    },
    reducers: {
        setCategory(state, action) {
            state.category = action.payload;
        }
    }
})

export const { setCategory } = CategorySlice.actions;
export default CategorySlice.reducer;