import express from "express";

import { registerValidation, loginValidator } from "../validation/auth.validation.js";
import { registerControllers, loginControllers } from "../controllers/auth.controllers.js";

const authRoute = express.Router();

authRoute.post("/register", registerValidation, registerControllers);
authRoute.post("/login", loginValidator, loginControllers);

export default authRoute;