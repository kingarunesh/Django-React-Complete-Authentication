import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userAuthApi = createApi({
    reducerPath: "userAuthApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api/user/" }),
    // endpoints: (builder) => ({
    //     getPokemonByName: builder.query({
    //         query: (name) => `pokemon/${name}`,
    //     }),
    // }),
});

export const { useGetPokemonByNameQuery } = userAuthApi;
