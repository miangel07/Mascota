import { racesregistre,Actualizar,Listar,Eliminar,ListarId } from "../Controllers/racesControllers.js";

import { Router } from "express";

const racesRouter = Router();

racesRouter.post("/registrar", racesregistre);
racesRouter.get("/listar", Listar);
racesRouter.get("/listar/:id", ListarId);
racesRouter.put("/actualizar/:id", Actualizar);
racesRouter.delete("/eleminar", Eliminar);

export default racesRouter;

