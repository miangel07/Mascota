import React from "react";
import { Link } from "react-router-dom";

const Agregar = () => {
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
          <div className=" bg-[url('../../public/photo-lg-0.svg')] bg-no-repeat w-[150px] h-[150px] mt-16 flex absolute top-12 "></div>
          <form className="flex justify-center relative items-center mt-72 ">
            <div className="flex justify-center items-center flex-col space-y-8">
            <input
              type="text"
              placeholder="Nombre de la mascota"
              className=" rounded-3xl flex w-80 h-10 pl-4 bg-[#cbd5e1] "
            />
            <select
              name=""
              id=""
              className=" rounded-3xl flex w-80  h-10 pl-4 bg-[#cbd5e1]"
            >
              <option value="">seleccione Raza</option>
              <option value=""></option>
              <option value=""></option>
            </select>
            <input
              type="text"
              placeholder="Categoria"
              className="rounded-3xl flex w-80   h-10 pl-4 bg-[#cbd5e1] "
            />
            <input
              type="text"
              placeholder="Subir Foto"
              className=" rounded-3xl flex w-80 h-10   pl-4 bg-[#cbd5e1] bg-no-repeat bg-[url('../../public/icon-camera.svg')] justify-items-center"
            />
            <select
              name=""
              id=""
              className=" rounded-3xl flex w-80   h-10 pl-4 bg-[#cbd5e1]"
            >
              <option value="">seleccione genero</option>
              <option value=""></option>
              <option value=""></option>
            </select>
            <button type="submit" className="bg-lime-600   rounded-3xl flex w-80 h-8 text-gray-50 text-center justify-center">
              guardar
            </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Agregar;
