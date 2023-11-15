import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
// import MenuToggleSlice from "./MenuToggleSlice";
import searchSlice from "./searchSlice";

export const store = configureStore({
    reducer: {
        app: appSlice,
        // menu: MenuToggleSlice,
        search: searchSlice,
    }
})

