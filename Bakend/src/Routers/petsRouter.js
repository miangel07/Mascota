import { create ,Listar ,listarPorId,eliminar,actualizar} from "../Controllers/petsControllers.js";
import {subirImagen} from "../Controllers/imagen.js";
import { Router } from "express";
import { validarToken } from "../Controllers/loginControllers.js";

const petsRouter = Router();

petsRouter.post("/registrar",validarToken,subirImagen, create);
petsRouter.get("/listar",validarToken,Listar);
petsRouter.get("/listar/:id",validarToken,listarPorId);
petsRouter.delete("/eliminar/:id",validarToken,eliminar);
petsRouter.put("/actualizar/:id",validarToken,subirImagen,actualizar);


export default petsRouter;
