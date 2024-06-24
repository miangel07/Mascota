import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  useGetPestsQuery,
  useDeletePestMutation,
} from "../../store/api/mascotas/mascotas";
import { useNavigate } from "react-router-dom";
import { removeCookie } from "../utils";
import { useGetCantidadQuery } from "../../store/api/categoria/categoria";

const Admin = () => {
  const { data, error, isLoading, refetch } = useGetPestsQuery();
  const { data: dataCantidad, error: errorCantidad, isLoading: isLoandCantidad } = useGetCantidadQuery()
  const [deletePet] =
    useDeletePestMutation();

  const navegacion = useNavigate();
  const cerrarSesion = () => {
    removeCookie("authToken");
    navegacion("/");
  };
  const handleDelete = async (id) => {
    try {
      await deletePet(id).unwrap();
      // Refrescar la lista de mascotas después de la eliminación
      refetch();
    } catch (error) {
      console.error("NO SE ELIMINO CON EXITO LA MASCOTA", error);
    }
  };
  useEffect(() => {
    refetch()
  },[])

  if (isLoading || isLoandCantidad) return <div>Cargando...</div>;
  if (error || errorCantidad) return <div>Error: {error.message}</div>;
  if (!data || !dataCantidad) return <div>No se encontraron mascotas.</div>;

  return (
    <div className="h-screen w-100 flex justify-center items-center">
      <div className="flex absolute bg-[url('../../public/bg.svg')] w-[400px] h-[785px] justify-center items-center flex-col">
        <div className="flex absolute flex-row text-white top-10 gap-10">
          <p>Administrar Mascotas</p>

          <div
            onClick={() => cerrarSesion()}
            className="bg-[url('../../public/btn-close.svg')] w-[34px] h-[34px] flex absolute left-52 cursor-pointer"
          ></div>
        </div>
        <div className="flex flex-row gap-2">
          <p className="text-white">categorias</p>
          {dataCantidad.map((items) => (
            <ul key={items._id} className="flex flex-row gap-2">
              <p className="text-rose-400">{items._id}</p>  <p className="text-white">{items.cantidad}</p>

            </ul>
          ))}

        </div>





        <div className="flex absolute top-24">
          <Link to={"/agregarMascota"}>
            <img
              className="cursor-pointer"
              src="btn-add.svg"
              alt="Agregar Mascota"
            />
          </Link>
        </div>

        {data.map((mascota) => (
          <ul key={mascota._id} className="flex pt-3 flex-col">
            <div className="flex flex-row bg-gray-400 w-full h-24 rounded-2xl top-52 items-center hover:bg-slate-300">
              <div className="flex w-1/3">
                <img
                  className="h-14 w-16 rounded-full flex"
                  src={`${import.meta.env.VITE_BASE_URL_IMG}/img/${mascota.images
                    }`}
                  alt={`Mascota ${mascota.name}`}
                />
              </div>
              <div className="flex w-1/1">
                <p>Nombre: {mascota.name}</p> <p>Raza: {mascota.races.name}</p>
              </div>
              <div className="relative w-1/2 flex justify-end">
                <Link to={`/ver/${mascota._id}`}>
                  <button
                    onClick={() => setId(mascota._id)}
                    className="flex relative bg-no-repeat bg-[url('../../public/btn-show.svg')] w-[34px] h-[34px] right-4 cursor-pointer"
                  ></button>
                </Link>
                <Link to={`/actualizar/${mascota._id}`}>
                  <button className="flex relative bg-no-repeat bg-[url('../../public/btn-edit.svg')] w-[34px] h-[34px] right-3 cursor-pointer"></button>
                </Link>

                <button
                  className="flex relative bg-no-repeat bg-[url('../../public/btn-delete.svg')] w-[34px] h-[34px] right-2 cursor-pointer"
                  onClick={() => handleDelete(mascota._id)}
                ></button>
              </div>
            </div>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Admin;
