import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCookie, setCookie } from "../../../src/utils/index.js";
// importo de createApi usando reduxjs y tambien importo las cookie donde las cookie insertan tren y remueve
export const mascotasApi = createApi({
  // este es el nombre del conde va a traer lo de la collection
  reducerPath: "pets",
  // usa fetchBaseQuery que es como axios donde le pasa la url la importa de la variable de entorno
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    // acomoda el herdes para que resiba json
    headers: {
      "Content-Type": "application/json",
      "Content-Type": " multipart/form-data",
    },
  }),
  // esta es el objeto del enpoit  donde unsa mutation de la libreria y hace las funciones del crud
  endpoints: (build) => ({
    /* Mutation son: POST, PUT, PATCH, DELETE */
    /* Query son: GET, SET */
    pestCreate: build.mutation({
      query: (data) => ({
        url: `pets/crear`,
        method: "POST",
        body: data,
        headers: {
          token: `${getCookie("authToken")}`,
        },
      }),
      // transforma la respuesta de la api y al envia el token que probiene del api a la cookie
      transformResponse(baseQueryReturnValue) {
        /* setCookie("user", JSON.stringify(baseQueryReturnValue.user), 30); */
        setCookie("authToken", baseQueryReturnValue.token, 30);
      },
    }),

    // lista las mascotas
    getPests: build.query({
      query: () => ({
        url: `pets/listar`,
        method: "GET",
        // y este lo envia a heders
        // esta funcion  getCookie obtiene la cookie donde se obtiene el token y se inserta en la cabecera
        // y esta funcion biene  exporta de ../../../src/utils
        headers: {
          token: `${getCookie("authToken")}`,
        },
      }),
    }),
    updatePest: build.mutation({
      query: ({ id, data }) => ({
        url: `pets/actualizar/${id}`,
        method: "PUT",
        body: data,
        headers: {
          token: `${getCookie("authToken")}`,
        },
      }),
    }),

    getPestById: build.query({
      query: (id) => ({
        url: `pets/listar/${id}`,
        method: "GET",
        headers: {
          token: `${getCookie("authToken")}`,
        },
      }),
    }),
    // elimina una mascota
    deletePest: build.mutation({
      query: (id) => ({
        url: `pets/eliminar/${id}`,
        method: "DELETE",
        headers: {
          token: `${getCookie("authToken")}`,
        },
      }),
    }),
  }),
});

export const {
  usePestCreateMutation,
  useGetPestsQuery,
  useDeletePestMutation,
  useGetPestByIdQuery,
  useUpdatePestMutation,
} = mascotasApi;
