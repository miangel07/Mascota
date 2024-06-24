import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useGetCategoriaQuery } from "../../store/api/categoria/categoria.js";
import { useGetgendersQuery } from "../../store/api/genders/genders.js";
import { useGetRaceQuery } from "../../store/api/race/reace.js";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../utils/index.js";

const Agregar = () => {
  const navegacion = useNavigate();
  const {
    data: categoriaData,
    error: categoriaError,
    isLoading: isCategoriaLoading,
  } = useGetCategoriaQuery();
  const {
    data: gendersData,
    error: gendersError,
    isLoading: isGendersLoading,
  } = useGetgendersQuery();
  const {
    data: raceData,
    error: raceError,
    isLoading: isRaceLoading,
  } = useGetRaceQuery();
  const [race, setRace] = useState("");
  const [category, setCategory] = useState("");
  const [denders, setGenero] = useState("");
  const [name, setName] = useState("");
  const [images, setImages] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFileUpload = (event) => {
    setImages(event.target.files[0]);
  };

  const creatPest = async () => {
    // Validar que race, category y genders no estén vacíos
    if (!race || !category || !denders || !name) {
      alert("Todos los campos deben estar seleccionados.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("races", race);
    formData.append("category", category);
    formData.append("genders", denders);
    formData.append("images", images);

    try {
      const response = await fetch("http://localhost:3000/api/pets/registrar", {
        method: "post",
        body: formData,
        headers: {
          token: `${getCookie("authToken")}`,
        },
      }).then((res) => res.json());
      alert(response.message);
      navegacion("/admin");
      console.log(response);
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  if (isCategoriaLoading || isGendersLoading || isRaceLoading) {
    return <div>Cargando...</div>;
  }

  if (categoriaError || gendersError || raceError) {
    return <div>Error al cargar los datos</div>;
  }

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex relative bg-[url('../../public/bg.svg')] w-[400px] h-[785px] justify-center items-center">
        <div className="flex absolute flex-row text-white top-8 justify-center items-center">
          <p>Agregar Mascota</p>
          <Link
            to="/admin"
            className="bg-[url('../../public/btn-close.svg')] w-[34px] h-[34px] flex absolute left-52 cursor-pointer"
          ></Link>
        </div>
        <div className="bg-[url('../../public/photo-lg-0.svg')] bg-no-repeat w-[150px] h-[150px] mt-16 flex absolute top-12"></div>
        <form
          onSubmit={handleSubmit(creatPest)}
          className="flex justify-center relative items-center mt-72"
        >
          <div className="flex justify-center items-center flex-col space-y-6">
            <input
              type="text"
              placeholder="Nombre de la mascota"
              className="rounded-3xl flex w-80 h-10 pl-4 bg-[#cbd5e1]"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span className="text-amber-700">
              {errors.name?.message && errors.name.message}
            </span>
            <select
              placeholder="Seleccione la raza de su mascota"
              className="rounded-3xl flex w-80 h-10 pl-4 bg-[#cbd5e1]"
              value={race}
              onChange={(e) => setRace(e.target.value)}
            >
              <option value="">Seleccione una raza</option>
              {raceData.map((index) => (
                <option key={index._id} value={index._id}>
                  {index.name}
                </option>
              ))}
            </select>
            <select
              placeholder="Seleccione una categoría"
              className="rounded-3xl flex w-80 h-10 pl-4 bg-[#cbd5e1]"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Seleccione una categoría</option>
              {categoriaData.map((index) => (
                <option key={index._id} value={index._id}>
                  {index.name}
                </option>
              ))}
            </select>
            <input
              type="file"
              placeholder="Subir Foto"
              className="rounded-3xl flex w-80 h-10 pl-4 bg-[#cbd5e1] bg-no-repeat text-end"
              onChange={handleFileUpload}
            />
            <select
              placeholder="Seleccione un género"
              className="rounded-3xl flex w-80 h-10 pl-4 bg-[#cbd5e1]"
              value={denders}
              onChange={(e) => setGenero(e.target.value)}
            >
              <option value="">Seleccione un género</option>
              {gendersData.map((index) => (
                <option key={index._id} value={index._id}>
                  {index.name}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="bg-lime-600 rounded-3xl flex w-80 h-8 text-gray-50 text-center justify-center"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Agregar;
