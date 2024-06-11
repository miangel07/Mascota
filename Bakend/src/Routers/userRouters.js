
import { userRegister,Listar,update,eliminar } from "../Controllers/userControllers.js";
import { validarToken } from "../Controllers/loginControllers.js";
import { Router } from "express";
const userRouter= Router()
userRouter.post("/registrar",validarToken,userRegister)
userRouter.get("/listar",validarToken,Listar)
userRouter.put("/actualizar/:id",validarToken,update)
userRouter.get("/listar/:id",validarToken,update)
userRouter.delete("/eliminar/:id",validarToken,eliminar)


export default userRouter;