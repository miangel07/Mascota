import { configureStore } from "@reduxjs/toolkit";
// aqui se pone para que el midewallers lea las funciones de mascota osea para luego que toda el APP la use

import { authApi } from "./conexion";
import { mascotasApi } from "./api/mascotas/mascotas.js";

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [mascotasApi.reducerPath]: mascotasApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
            .concat(authApi.middleware)
            .concat(mascotasApi.middleware) 
});
