import { Listar,actualizar,crear,eliminar,listarId } from "../Controllers/gandersControllers.js";
import { Router } from "express";

const gandersRouter = Router();

gandersRouter.get("/listar", Listar);

gandersRouter.post("/crear", crear);

gandersRouter.put("/actualizar/:id", actualizar);

gandersRouter.get("/listar/:id", listarId);

gandersRouter.delete("/eliminar/:id", eliminar);

export default gandersRouter;

