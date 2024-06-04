import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetPestsQuery, useDeletePestMutation } from "../../store/api/mascotas/mascotas";


const Admin = () => {
  // use getPestsQuery por defecto trae data error isloandig y hay que manejar eso o si no no carga bien 
  const { data, error, isLoading } = useGetPestsQuery();
  const [deletePet, { isLoadingg, isSuccess, isError, }] = useDeletePestMutation();
  const handleDelete = async (id) => {
    try {
      console.log(id)
      await deletePet(id).unwrap();
      // Realiza cualquier otra acción necesaria después de la eliminación
    } catch (error) {
      console.error('Failed to delete the pet:', error);
    }
  };
  useEffect(() => {
    if (isSuccess) {
      window.location.reload();
    }

  })
  if (isLoadingg) return (<p>eliminado...</p>)
  if (isSuccess) return (<p>eliminado correctamente</p>)
  if (isError) return (<p>Error deleting pet: {error.message}</p>)

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No se encontraron mascotas.</div>;
  return (
    <div className="h-screen w-100 flex justify-center items-center">
      <div className="flex absolute bg-[url('../../public/bg.svg')] w-[400px] h-[785px] justify-center items-center flex-col">
        <div className="flex absolute flex-row text-white top-10 gap-10">
          <p>Administrar Mascotas</p>
        </div>
        <div className="flex absolute top-24"><img className="cursor-pointer" src="btn-add.svg" alt="" /></div>

        {/* aqui mapeo el data que me trae el store/mascotas/mascotas.js */}
        {data.map((mascota) => (
          <ul key={mascota._id} className="flex gap-2 flex-col">
            <div className="flex  flex-row bg-gray-400 w-full  h-24 rounded-2xl top-52 items-center  hover:bg-slate-300">
              <div className="flex w-1/3">
                <img className="h-14 w-16 rounded-full flex" src={`${import.meta.env.VITE_BASE_URL_IMG}/img/${mascota.images}`
                } />
              </div>
                <div className="flex w-1/1"><p>Nombre: {mascota.name}</p> <p>Raza: {mascota.race_id.name}</p></div>
              <div className="relative w-1/2 flex justify-end">
                <Link to={"/ver"}>
                <button className="flex relative bg-no-repeat bg-[url('../../public/btn-show.svg')] w-[34px] h-[34px] right-4 cursor-pointer">
                </button>
                </Link>
                <Link to={"/agregarMascota"}>
                <button className="flex relative  bg-no-repeat bg-[url('../../public/btn-edit.svg')] w-[34px] h-[34px] right-3 cursor-pointer" >
                </button>
                </Link>
               
                
                <button className="flex relative  bg-no-repeat bg-[url('../../public/btn-delete.svg')] w-[34px] h-[34px] right-2 cursor-pointer" onClick={() => handleDelete(mascota._id)} >
                </button>
        
              </div>
            </div>
          </ul>
        ))}


      </div>
    </div>
  );
};

export default Admin;
