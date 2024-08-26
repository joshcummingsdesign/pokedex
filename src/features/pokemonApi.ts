import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { PokemonQuery, PokemonSingle } from "./interfaces";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemon: builder.query<PokemonQuery, void>({
      query: () => "pokemon",
    }),
    getPokemonByName: builder.query<PokemonSingle, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery, useGetPokemonQuery } = pokemonApi;
