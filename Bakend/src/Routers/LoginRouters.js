import {userLogin} from '../Controllers/loginControllers.js'

import { Router } from "express";

const loginRouter = Router();

loginRouter.post("/login", userLogin);

export default loginRouter;