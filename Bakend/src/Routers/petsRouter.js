import { create ,Listar ,listarPorId,eliminar,actualizar} from "../Controllers/petsControllers.js";
import {subirImagen} from "../Controllers/imagen.js";
import { Router } from "express";

const petsRouter = Router();

petsRouter.post("/registrar",subirImagen, create);
petsRouter.get("/listar",Listar);
petsRouter.get("/listar/:id",listarPorId);
petsRouter.delete("/eliminar/:id",eliminar);
petsRouter.put("/actualizar/:id",subirImagen,actualizar);


export default petsRouter;
