import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
import catReducer from "../features/categories/catSlice";
import systemReducer from "./systemSlice";

export default configureStore({
    reducer: {
        userInfo: userReducer,
        system: systemReducer,
        catInfo: catReducer,
    }
})