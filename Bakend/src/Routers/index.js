import { Router } from "express";
import userRouter from './userRouters.js'
import racesRouter from "./RacesRouters.js";
import categorieRouter from "./categoriesRouters.js";
import gandersRouter from "./gandersRouters.js";
import petsRouter from "./petsRouter.js";
import loginRouter from "./LoginRouters.js";
const router=Router();

router.use("/usuario",userRouter)
router.use("/raza",racesRouter)
router.use("/categoria",categorieRouter)
router.use("/genero",gandersRouter)
router.use("/pets",petsRouter)
router.use("/auth",loginRouter)
export default router;
