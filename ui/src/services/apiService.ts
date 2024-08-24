import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { config } from "@/config";
import { Pokemon } from "@/interfaces/pokemon";

export const apiService = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: config.VITE_API_URL }),
  endpoints: (builder) => ({
    getPokemon: builder.query<{ data: Pokemon[] }, void>({
      query: () => "/pokemon",
    }),
  }),
});

export const { useGetPokemonQuery } = apiService;
