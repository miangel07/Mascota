import { racesregistre,Actualizar,Listar,Eliminar,ListarId } from "../Controllers/racesControllers.js";
import { validarToken } from "../Controllers/loginControllers.js";

import { Router } from "express";

const racesRouter = Router();

racesRouter.post("/registrar",validarToken, racesregistre);
racesRouter.get("/listar", validarToken,Listar);
racesRouter.get("/listar/:id", validarToken,ListarId);
racesRouter.put("/actualizar/:id", validarToken,Actualizar);
racesRouter.delete("/eleminar",validarToken, Eliminar);

export default racesRouter;

