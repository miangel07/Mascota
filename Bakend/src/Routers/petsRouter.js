import { create ,Listar} from "../Controllers/petsControllers.js";
import {subirImagen} from "../Controllers/imagen.js";
import { Router } from "express";

const petsRouter = Router();

petsRouter.post("/crear",subirImagen, create);
petsRouter.get("/listar",subirImagen, Listar);

export default petsRouter;
