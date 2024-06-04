import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCookie} from "../../src/utils/index.js";

export const authApi = createApi({
        reducerPath: "auth",
        baseQuery: fetchBaseQuery({
            baseUrl: import.meta.env.VITE_BASE_URL,
            headers: {
                "Content-Type": "application/json",
                
            },
        }),
        endpoints: (build) => ({
            /*Mutation son: POST, PUT, PATCH, DELETE*/
            /* Query son: GET, SET */
            loginUser: build.mutation({
                query: (data) => ({
                    url: `auth/login`,
                    method: 'POST',
                    body: data,
                }),
                transformResponse(baseQueryReturnValue) {
                 /*    setCookie("user", JSON.stringify(baseQueryReturnValue.user), 30); */
                    setCookie("authToken", baseQueryReturnValue.token, 30);
                }
            }),
         
    }),
    });

export const { useLoginUserMutation, useGetListQuery } = authApi;