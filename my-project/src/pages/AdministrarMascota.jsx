import React from "react";
import { Link } from "react-router-dom";
import { useGetPestsQuery } from "../../store/api/mascotas/mascotas";

const Admin = () => {
  // use getPestsQuery por defecto trae data error isloandig y hay que manejar eso o si no no carga bien 
  const { data, error, isLoading } = useGetPestsQuery();
  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No se encontraron mascotas.</div>;
  return (
    <div className="h-screen w-100 flex justify-center items-center">
      <div className="flex relative bg-[url('../../public/bg.svg')] w-[400px] h-[785px] justify-center items-center flex-col">
        <div className="flex absolute flex-row text-white top-10 gap-10">
          <p>Administrar Mascotas</p>
        </div>

        <div className="flex absolute bg-gray-400 w-11/12 h-24 rounded-2xl top-52 items-center hover:bg-slate-300">
        <ul>
          {/* aqui mapeo el data que me trae el store/mascotas/mascotas.js */}
        {data.map((mascota) => (
          <li key={mascota._id}>
            <h2>{mascota.name}</h2>
            <p>Raza: {mascota.race_id}</p>
            <p>Categoría: {mascota.categorira}</p>
            <p>Género: {mascota.genders}</p>
          </li>
        ))}
      </ul>

          <div className="flex absolute bg-[url('../../public/btn-delete.svg')] w-[34px] h-[34px] right-4 cursor-pointer"></div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
