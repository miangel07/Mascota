import { configureStore } from "@reduxjs/toolkit";
// aqui se pone para que el midewallers lea las funciones de mascota osea para luego que toda el APP la use

import { authApi } from "./conexion";
import { mascotasApi } from "./api/mascotas/mascotas.js";
import { categoria } from "./api/categoria/categoria.js";
import { race } from "./api/race/reace.js";
import { genero } from "./api/genders/genders.js";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [mascotasApi.reducerPath]: mascotasApi.reducer,
    [categoria.reducerPath]: categoria.reducer,
    [race.reducerPath]: race.reducer,
    [genero.reducerPath]: genero.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(
      authApi.middleware,
      mascotasApi.middleware,
      categoria.middleware,
      race.middleware,
      genero.middleware
    ),
});
