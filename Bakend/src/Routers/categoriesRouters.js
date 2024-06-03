import { Create,list,dalete,update,listId } from "../Controllers/categoricesControllers.js";
import { Router } from "express";

const categorieRouter = Router();

categorieRouter.get("/listar", list)
categorieRouter.post("/registrar", Create)
categorieRouter.get("/listar/:id", listId)
categorieRouter.put("/actualizar", update)
categorieRouter.get("/eliminar", dalete)

export default categorieRouter;