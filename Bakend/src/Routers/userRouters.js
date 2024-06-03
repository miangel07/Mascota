
import { userRegister,Listar,update,eliminar } from "../Controllers/userControllers.js";
import { Router } from "express";
const userRouter= Router()
userRouter.post("/registrar",userRegister)
userRouter.get("/listar",Listar)
userRouter.put("/actualizar/:id",update)
userRouter.get("/listar/:id",update)
userRouter.delete("/eliminar/:id",eliminar)


export default userRouter;