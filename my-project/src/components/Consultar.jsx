import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetPestByIdQuery} from "../../store/api/mascotas/mascotas";


const Consultar = ({id}) => {
  const { data, error, isLoading } = useGetPestByIdQuery(id);

  if (isLoading) {
    return <p>cargando...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  //console.log(id);
  return (
    <>
      <div className="h-screen w-100 flex justify-center items-center">
        <div className="flex relative bg-[url('../../public/bg.svg')] w-[400px] h-[785px] justify-center items-center ">
          <div className="flex absolute flex-row text-white top-8  justify-center items-center ">
            <p>Agregar Mascota</p>
            <Link
              to="/admin"
              className="bg-[url('../../public/btn-close.svg')] w-[34px] h-[34px] flex absolute left-52 cursor-pointer"
            ></Link>
          </div>
          <div className=" bg-no-repeat w-[70px] h-[72px] mt-16 flex absolute top-12 ">
          <img  className="h-30 w-30 rounded-full flex" src={`${import.meta.env.VITE_BASE_URL_IMG}/img/${data.images}`
                } />
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex justify-start ">
              <label className="flex rounded-l-lg  h-8 pl-2 w-20 bg-slate-500  items-center">Nombre:</label>
              <div type="text" className="rounded-r-lg w-28 bg-[#cbd5e1] text-center flex items-center justify-center">{data.name}</div>
            </div>
            <div  className="flex justify-start ">
              <label className="flex h-8 rounded-l-lg pl-2 w-20 bg-slate-500 items-center">Raza:</label>
              <div type="text"  className="rounded-r-lg bg-[#cbd5e1] w-28 text-center flex items-center justify-center" >{data.races.name}</div>
            </div>
            <div  className="flex justify-start ">
              <label className="flex rounded-l-lg h-8 pl-1 w-20 bg-slate-500 items-center">Categoria:</label>
              <div type="text"  className="rounded-r-lg bg-[#cbd5e1] w-28 text-center flex items-center justify-center" >{data.category.name}</div>
            </div>
            <div  className="flex justify-start ">
              <label className="flex rounded-l-lg h-8 pl-2 w-20 bg-slate-500 items-center">Genero:</label>
              <div type="text"  className="rounded-r-lg bg-[#cbd5e1] w-28 text-center flex items-center justify-center" >{data.genders.name}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Consultar;
