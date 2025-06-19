import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IPokemon {
    name:string,
    weight: string
}
export const pokemoApi = createApi({
    reducerPath: 'pokemoApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://pokeapi.co/api/v2/'}),
    endpoints: (build) => ({
        getPokemon: build.query<IPokemon, string>({
            query: (name) => `pokemon/${name}`,
            transformResponse: (response:IPokemon ):IPokemon => {
                 return response
            },
        })
    })
})

export const {useGetPokemonQuery} = pokemoApi