import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCookie } from "../../../src/utils";
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
                headers: {
                    token: `${getCookie("authToken")}`,
                  },
            }),
        }),
    }),
})
export const {useGetRaceQuery}=race