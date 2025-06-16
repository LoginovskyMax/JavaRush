import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import characterslice from "./slices/charactersSlise";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        characters: characterslice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
