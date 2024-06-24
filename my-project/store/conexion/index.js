import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCookie, setCookie } from "../../src/utils/index.js";

export const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  }),
  endpoints: (build) => ({
    loginUser: build.mutation({
      query: (data) => ({
        url: `auth/login`,
        method: 'POST',
        body: data,
      }),
      transformResponse(baseQueryReturnValue) {
        setCookie("authToken", baseQueryReturnValue.token);
      },
    }),
  }),
});

export const { useLoginUserMutation } = authApi;
