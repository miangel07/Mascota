import { Create,list,dalete,update,listId,cantidad} from "../Controllers/categoricesControllers.js";
import { Router } from "express";
import { validarToken } from "../Controllers/loginControllers.js";

const categorieRouter = Router();

categorieRouter.get("/listar", list)
categorieRouter.post("/registrar", Create)
categorieRouter.get("/listar/:id",validarToken, listId)
categorieRouter.put("/actualizar", validarToken,update)
categorieRouter.get("/eliminar",validarToken, dalete)
categorieRouter.get("/cantidad",cantidad)

export default categorieRouter;