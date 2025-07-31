import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface ICharactersState {
    cityes: Array<{alias: string, name: string, id: number}>
    isLoading: boolean,
    tickets: [],
    dishes: [],
    currentPage: number
}

const initialState:ICharactersState = {
    cityes: [],
    isLoading: false,
    tickets: [],
    dishes: [],
    currentPage: 0
}

export const fetchCity = createAsyncThunk(
    'fetchCity',
    async () => {
       const response = await fetch(`http://localhost:3000/city`)
       const dataResp = await response.json()

       return dataResp
    }
)

export const ticketslice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
           state.currentPage = action.payload
        },
    },
    extraReducers: (builder) => {
      builder.addCase(fetchCity.pending, (state) => {
        state.isLoading = true
      })
      builder.addCase(fetchCity.fulfilled, (state, action) => {
        state.cityes = action.payload
        state.isLoading = false
      })
    }
})

export const {setCurrentPage} = ticketslice.actions

export default ticketslice.reducer

