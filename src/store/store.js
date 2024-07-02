import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
import catReducer from "../features/categories/catSlice";
import productReducer from "../features/products/productSlice";
import systemReducer from "./systemSlice";

export default configureStore({
    reducer: {
        userInfo: userReducer,
        system: systemReducer,
        catInfo: catReducer,
        productInfo: productReducer,
    }
})