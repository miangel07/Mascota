import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCookie,setCookie } from "../../../src/utils";
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
        },
    }),
    // esta es el objeto del enpoit  donde unsa mutation de la libreria y hace las funciones del crud 
    endpoints: (build) => ({
        /* Mutation son: POST, PUT, PATCH, DELETE */
        /* Query son: GET, SET */
        pestCreate: build.mutation({
            query: (data) => ({
                url: `pets/crear`,
                method: 'POST',
                data: data,
            }),
            // transforma la respuesta de la api y al envia el token que probiene del api a la cookie
            transformResponse(baseQueryReturnValue) {
                /* setCookie("user", JSON.stringify(baseQueryReturnValue.user), 30); */
                setCookie("authToken", baseQueryReturnValue.token, 30);
            }
        }),

        // lista las mascotas
        getPests: build.query({
            query: () => ({
                url: `pets/listar`,
                method: 'GET',
                // y este lo envia a heders
                // esta funcion  getCookie obtiene la cookie donde se obtiene el token y se inserta en la cabecera 
                // y esta funcion biene  exporta de ../../../src/utils
                headers: {
                    "Authorization": `Bearer ${getCookie("authToken")}`,
                },
            }),
        }),
        // elimina una mascota
        deletePest: build.mutation({
            query: (id) => ({
                url: `pets/eliminar/${id}`,
                method: 'DELETE',
            
                headers: {
                    "Authorization": `Bearer ${getCookie("authToken")}`,
                },
            }),
           
            transformResponse(baseQueryReturnValue) {
              
                setCookie("authToken", baseQueryReturnValue.token, 30);
            }
        }),
    }),
});

export const { usePestCreateMutation, useGetPestsQuery,useDeletePestMutation} = mascotasApi;