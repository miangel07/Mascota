import { Router } from "express";
import userRouter from './userRouters.js'
import racesRouter from "./RacesRouters.js";
import categorieRouter from "./categoriesRouters.js";
import gandersRouter from "./gandersRouters.js";
import petsRouter from "./petsRouter.js";
const router=Router();

router.use("/usuario",userRouter)
router.use("/raza",racesRouter)
router.use("/categoria",categorieRouter)
router.use("/genero",gandersRouter)
router.use("/pets",petsRouter)

export default router;
