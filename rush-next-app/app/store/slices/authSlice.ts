import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const users = [
    {
    name: "Alice",
    password: '1234',
    email: 'alice@mail.ru',
    token: 'alice'
    }
]

interface iUser {
    name: string,
    password: string,
    email: string,
    token: string
}

interface IAuthState {
   user: iUser | null,
   error: string
}

const initialState:IAuthState = {
    user: null,
    error: ''
}

export const authSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        getUser: (state, action:PayloadAction<Omit<iUser, 'name' | 'token'>>) => {
            const user = users.find(item => item.email === action.payload.email)

            if(!user){
                state.error = 'user not found'
                return
            } else if(user.password !== action.payload.password){
                state.error = 'wrong password'
                return
            }

            if(user) {
                state.error = ''
                state.user = user
            }
        },
        logOut: (state) => {
            state.user = null
        }
    }
})

export const  { getUser, logOut } = authSlice.actions

export default authSlice.reducer

