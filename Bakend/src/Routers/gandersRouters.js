import { Listar,actualizar,crear,eliminar,listarId } from "../Controllers/gandersControllers.js";
import { Router } from "express";
import { validarToken } from "../Controllers/loginControllers.js";

const gandersRouter = Router();

gandersRouter.get("/listar",validarToken, Listar);

gandersRouter.post("/registrar",validarToken, crear);

gandersRouter.put("/actualizar/:id",validarToken, actualizar);

gandersRouter.get("/listar/:id",validarToken, listarId);

gandersRouter.delete("/eliminar/:id", validarToken,eliminar);

export default gandersRouter;

