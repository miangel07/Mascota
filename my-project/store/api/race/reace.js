import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const race = createApi({
    reducerPath: "raza",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL,
        headers: {
            "Content-Type": "application/json",
        },
    }),
    endpoints: (build) => ({
        getRace: build.query({
            query: () => ({
                url: `raza/listar`,
                method: "GET",
            }),
        }),
    }),
})
export const {useGetRaceQuery}=race