import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import characterslice from "./slices/charactersSlise";
import ticketslice from "./slices/ticketsSlice";

import { pokemoApi } from "./slices/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";


export const store = configureStore({
    reducer: {
        counter: counterSlice,
        characters: characterslice,
        tickets: ticketslice,
        [pokemoApi.reducerPath]: pokemoApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemoApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
