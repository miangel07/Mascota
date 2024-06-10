import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCookie } from "../../../src/utils";
export const categoria = createApi({
    reducerPath: "categoria",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL,
        headers: {
            "Content-Type": "application/json",
        },
    }),
    endpoints: (build) => ({
        getCategoria: build.query({
            query: () => ({
                url: `categoria/listar`,
                method: "GET",
                headers: {
                    Authorization: `Bearer ${getCookie("authToken")}`,
                  },
            }),
        }),
    }),
})
export const {useGetCategoriaQuery}=categoria
