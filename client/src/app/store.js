import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { userAuthApi } from "../services/userAuthApi";
import authReducer from "../features/authSlice";

export const store = configureStore({
    reducer: {
        [userAuthApi.reducerPath]: userAuthApi.reducer,
        auth: authReducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userAuthApi.middleware),
});

setupListeners(store.dispatch);
