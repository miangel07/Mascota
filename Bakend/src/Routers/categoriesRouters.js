import { Create,list,dalete,update,listId } from "../Controllers/categoricesControllers.js";
import { Router } from "express";
import { validarToken } from "../Controllers/loginControllers.js";

const categorieRouter = Router();

categorieRouter.get("/listar", validarToken,list)
categorieRouter.post("/registrar",validarToken, Create)
categorieRouter.get("/listar/:id",validarToken, listId)
categorieRouter.put("/actualizar", validarToken,update)
categorieRouter.get("/eliminar",validarToken, dalete)

export default categorieRouter;