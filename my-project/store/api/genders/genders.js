import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const genero = createApi({
    reducerPath: "genero",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL,
        headers: {
            "Content-Type": "application/json",
        },
    }),
    endpoints: (build) => ({
        getgenders: build.query({
            query: () => ({
                url: `genero/listar`,
                method: "GET",
            }),
        }),
    }),
})
export const {useGetgendersQuery}=genero