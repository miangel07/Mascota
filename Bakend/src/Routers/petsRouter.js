import { create } from "../Controllers/petsControllers.js";
import {subirImagen} from "../Controllers/imagen.js";
import { Router } from "express";

const petsRouter = Router();

petsRouter.post("/crear",subirImagen, create);

export default petsRouter;
