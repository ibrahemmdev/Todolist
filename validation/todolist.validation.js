import { check } from "express-validator";
import validatorMiddleware from "../middlewares/validator.middlewares.js";

export const taskCreateValidation = [
    check("title")
        .notEmpty()
        .withMessage("Title is required")
        .isLength({ min:2 })
        .withMessage("Title must be at least 2 characters")
        .isLength({ max: 30 })
        .withMessage("Title must be at most 30 characters long"),

    check("description")
        .notEmpty()
        .withMessage("Description is required")
        .isLength({ min: 10 })
        .withMessage("Description must be at least 10 characters")
        .isLength({ max: 100 })
        .withMessage("Description must be at most 100 characters long"),

        validatorMiddleware
]

export const taskUpdateValidation = [
    check("id")
        .notEmpty()
        .withMessage("Id is missed"),
        
    check("title")
        .notEmpty()
        .withMessage("Title is required")
        .isLength({ min:2 })
        .withMessage("Title must be at least 2 characters")
        .isLength({ max: 30 })
        .withMessage("Title must be at most 30 characters long"),

    check("description")
        .notEmpty()
        .withMessage("Description is required")
        .isLength({ min: 10 })
        .withMessage("Description must be at least 10 characters")
        .isLength({ max: 100 })
        .withMessage("Description must be at most 100 characters long"),

    validatorMiddleware 
]

export const taskDeleteValidation = [
    check("id")
        .notEmpty()
        .withMessage("Id is missed"),

    validatorMiddleware
]