import React from "react";
import { useEffect, useState } from "react";
import { useLoginUserMutation } from "../../store/conexion/index.js";
import { getCookie, setCookie } from "../utils/index.js";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const [loginUser, { isSuccess, error, status }] = useLoginUserMutation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigation = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    loginUser(data);
  };

  useEffect(() => {
    if (isSuccess) {
      navigation("/admin");

      console.log("Ingreso exitoso");
    }
  }, [isSuccess]);

  const errorMessage = error ? error.data.message : "";


  return (
    <>
      <div className="h-screen w-100 flex justify-center items-center">
        <div className="bg-[url('../../public/bg-login.svg')] h-[785px] w-[400px] relative flex justify-center items-center ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="justify-center flex items-center flex-col"
          >
            <input
              type="text"
              className="absolute rounded-3xl flex w-80 bottom-44 h-10 pl-4 bg-[#cbd5e1] "
              placeholder="correo Electronico"
              {...register("email", {
                required: {
                  value: true,
                  message: "Por favor digitar cédula",
                },
              })}
            />
            <span className="text-white flex  shadow-sm">
              {errors.email?.message && errors.email.message}
            </span>
            <input
              type="text"
              className="absolute rounded-3xl flex w-80 bottom-28 h-10 pl-4 bg-[#cbd5e1] "
              placeholder="contraseña"
              {...register("password", {
                required: {
                  value: true,
                  message: "Por favor digitar password",
                },
              })}
            />
            <span className="text-white flex  shadow-sm">
              {errors.password?.message && errors.password.message}
              {errorMessage}

            </span>
            <button
              type="submit"
              className="bg-blue-800 bottom-12 absolute rounded-3xl flex w-80 h-8 text-gray-50 text-center justify-center"
            >
              ingresar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
