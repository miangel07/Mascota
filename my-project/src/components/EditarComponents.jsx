import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useGetCategoriaQuery } from "../../store/api/categoria/categoria.js";
import { useGetgendersQuery } from "../../store/api/genders/genders.js";
import { useGetRaceQuery } from "../../store/api/race/reace.js";
import { useNavigate } from "react-router-dom";
import {
  useGetPestByIdQuery,
  useUpdatePestMutation,
} from "../../store/api/mascotas/mascotas";

const EditarComponents = ({ id }) => {
  const navigate = useNavigate();
  const [updatePest, { isLoading: isUpdating, error: updateError }] =
    useUpdatePestMutation();

  const { data: pestData, error, isLoading } = useGetPestByIdQuery(id);
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

  const [mascota, setMascota] = useState({
    name: "",
    races: "",
    category: "",
    genders: "",
    images: null,
  });

  const [razas, setRazas] = useState([]);
  const [categorias, setCategoria] = useState([]);
  const [generos, setGenero] = useState([]);
  const [images, setImages] = useState(null);

  useEffect(() => {
    if (raceData) setRazas(raceData);
    if (categoriaData) setCategoria(categoriaData);
    if (gendersData) setGenero(gendersData);
    if (pestData) {
      setMascota({
        name: pestData.name || "",
        /* esto quiere decir que  si pestData.genders es null o undefined, 
        se asigna "" a mascota.genders. Si pestData.genders no es null ni undefined, 
        se asigna el valor de pestData.genders.name a mascota.genders 
        en pocas paralabras actua como un codicional*/
        races: pestData.races?.name || "",
        category: pestData.category?.name || "",
        genders: pestData.genders?.name || "",
        images: pestData.images || null,
      });
    }
  }, [raceData, categoriaData, gendersData, pestData]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFileUpload = (event) => {
    setImages(event.target.files[0]);
  };

  const updatePet = async () => {
    if (!mascota.races || !mascota.category || !mascota.genders) {
      console.error("Todos los campos deben estar seleccionados.");
      return;
    }

    const formData = new FormData();
    formData.append("name", mascota.name);
    formData.append("races", mascota.races);
    formData.append("category", mascota.category);
    formData.append("genders", mascota.genders);
    formData.append("images", images);

    try {
      const mutationResult = await updatePest({ id, data: formData }).unwrap();
      alert(mutationResult.message);

      navigate("/admin");
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  if (
    isLoading ||
    isCategoriaLoading ||
    isGendersLoading ||
    isRaceLoading ||
    isUpdating
  ) {
    return <div>Cargando...</div>;
  }

  if (error || categoriaError || gendersError || raceError || updateError) {
    return <div>Error al cargar los datos</div>;
  }

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex relative bg-[url('../../public/bg.svg')] w-[400px] h-[785px] justify-center items-center">
        <div className="flex absolute flex-row text-white top-8 justify-center items-center">
          <p>Editar Mascota</p>
          <Link
            to="/admin"
            className="bg-[url('../../public/btn-close.svg')] w-[34px] h-[34px] flex absolute left-52 cursor-pointer"
          ></Link>
        </div>
        <div className="bg-no-repeat w-[150px] h-[150px] mt-16 flex absolute top-12">
          <img
            className="h-30 w-30 rounded-full flex"
            src={`${import.meta.env.VITE_BASE_URL_IMG}/img/${pestData.images}`}
          />
        </div>
        <form
          onSubmit={handleSubmit(updatePet)}
          className="flex justify-center relative items-center mt-72"
        >
          <div className="flex justify-center items-center flex-col space-y-8">
            <input
              type="text"
              placeholder="Nombre de la mascota"
              className="rounded-3xl flex w-80 h-10 pl-4 bg-[#cbd5e1]"
              value={mascota.name}
              onChange={(e) => setMascota({ ...mascota, name: e.target.value })}
            />
            <select
              placeholder="Seleccione la raza de su mascota"
              className="rounded-3xl flex w-80 h-10 pl-4 bg-[#cbd5e1]"
              value={mascota.races}
              onChange={(e) =>
                setMascota({ ...mascota, races: e.target.value })
              }
            >
              <option value="">Seleccione una raza</option>
              {razas.map((index) => (
                <option key={index._id} value={index._id}>
                  {index.name}
                </option>
              ))}
            </select>
            <select
              placeholder="Seleccione una categoría"
              className="rounded-3xl flex w-80 h-10 pl-4 bg-[#cbd5e1]"
              value={mascota.category}
              onChange={(e) =>
                setMascota({ ...mascota, category: e.target.value })
              }
            >
              {categorias.map((index) => (
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
              value={mascota.genders}
              onChange={(e) =>
                setMascota({ ...mascota, genders: e.target.value })
              }
            >
              <option value="">Seleccione un genero </option>
              {generos.map((index) => (
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

export default EditarComponents;
