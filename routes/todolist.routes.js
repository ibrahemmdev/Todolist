import express from "express";

import { taskCreateControllers, taskUpdateControllers, taskDeleteControllers, taskGetControllers } from "../controllers/todolist.controllers.js";
import { taskCreateValidation, taskUpdateValidation, taskDeleteValidation } from "../validation/todolist.validation.js"
import authMiddleware from "../middlewares/authorization.middlewares.js";

const todoRoute = express.Router();

todoRoute.post("/todos", authMiddleware, taskCreateValidation, taskCreateControllers);
todoRoute.put("/todos/:id", authMiddleware, taskUpdateValidation, taskUpdateControllers);
todoRoute.delete("/todos/:id",authMiddleware, taskDeleteValidation, taskDeleteControllers);
todoRoute.get("/todos", authMiddleware, taskGetControllers);

export default todoRoute;