import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: []
}

const userSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategories: (state, { payload = [] }) => {
            state.categories = payload;
        }
    }
})

const { reducer, actions } = userSlice;

export const { setCategories } = actions;

export default reducer;