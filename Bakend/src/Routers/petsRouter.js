import { create ,Listar ,eliminar,actualizar} from "../Controllers/petsControllers.js";
import {subirImagen} from "../Controllers/imagen.js";
import { Router } from "express";

const petsRouter = Router();

petsRouter.post("/crear",subirImagen, create);
petsRouter.get("/listar",Listar);
petsRouter.get("/listar/:id",Listar);
petsRouter.delete("/eliminar/:id",eliminar);
petsRouter.put("/actualizar/:id",subirImagen,actualizar);


export default petsRouter;
