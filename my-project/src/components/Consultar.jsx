import React from "react";
import { Link } from "react-router-dom";
const Consultar = () => {
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
          <div className=" bg-[url('../../public/photo-sm-3.svg')] bg-no-repeat w-[70px] h-[72px] mt-16 flex absolute top-12 "></div>
          <div className="flex flex-col space-y-4">
            <div className="flex justify-start ">
              <label className="flex rounded-l-lg  h-8 pl-2 w-20 bg-slate-500  items-center">Nombre:</label>
              <input type="text" className="rounded-r-lg bg-[#cbd5e1] " />
            </div>
            <div  className="flex justify-start ">
              <label className="flex h-8 rounded-l-lg pl-2 w-20 bg-slate-500 items-center">Raza:</label>
              <input type="text"  className="rounded-r-lg bg-[#cbd5e1] " />
            </div>
            <div  className="flex justify-start ">
              <label className="flex rounded-l-lg h-8 pl-1 w-20 bg-slate-500 items-center">Categoria:</label>
              <input type="text"  className="rounded-r-lg bg-[#cbd5e1] " />
            </div>
            <div  className="flex justify-start ">
              <label className="flex rounded-l-lg h-8 pl-2 w-20 bg-slate-500 items-center">Genero:</label>
              <input type="text"  className="rounded-r-lg bg-[#cbd5e1] " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Consultar;
