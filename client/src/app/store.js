import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { userAuthApi } from "../services/userAuthApi";

export const store = configureStore({
    reducer: {
        [userAuthApi.reducerPath]: userAuthApi.reducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userAuthApi.middleware),
});

setupListeners(store.dispatch);
