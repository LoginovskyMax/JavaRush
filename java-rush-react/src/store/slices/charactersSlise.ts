import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface ICharactersState {
    characters: Array<{image: string, name: string, id: number}>
    isLoading: boolean,
    currentPage: number,
    totalPages: number
}

const initialState:ICharactersState = {
    characters: [],
    isLoading: false,
    currentPage: 1,
    totalPages: 0
}

export const fetchCharacters = createAsyncThunk(
    'fetchCharacters',
    async (pageNumber: number | undefined = 1, thunkAPI) => {
       const response = await fetch(`https://rickandmortyapi.com/api/character?page=${pageNumber}`)
       const dataResp = await response.json()
       await new Promise((res)=>{
         setTimeout(() => res(true), 3000)
       })
       return dataResp
    }
)

export const characterslice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
           state.currentPage = action.payload
        },
    },
    extraReducers: (builder) => {
      builder.addCase(fetchCharacters.pending, (state) => {
        state.isLoading = true
      })
      builder.addCase(fetchCharacters.fulfilled, (state, action) => {
        state.characters = action.payload.results
        state.totalPages = action.payload.info.pages
        state.isLoading = false
      })
    }
})

export const {setCurrentPage} = characterslice.actions

export default characterslice.reducer

