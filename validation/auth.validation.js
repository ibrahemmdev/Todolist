import { check } from "express-validator";
import userModels from "../models/user.models.js";
import validatorMiddleware from "../middlewares/validator.middlewares.js";

export const registerValidation = [
    check("name")
        .notEmpty()
        .withMessage("Name is required")
        .isString()
        .withMessage("Name must be string")
        .isLength({ min:2 })
        .withMessage("Name must be at least 2 characters")
        .isLength({ max: 30 })
        .withMessage("Name must be at most 30 characters long"),
    
    check("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Not Valid Email")
    .custom((email) => {
        return userModels.findOne({ email }).then((user)=>{
            if(user){
                return Promise.reject(new Error("User is already exists"))
            }
            return true
        })
    }),

    check("password")
        .notEmpty()
        .withMessage("Password is required")
        .isLength({ min:6 })
        .withMessage("Password must be at least 6 characters"),
    
    validatorMiddleware
]

export const loginValidator = [
    check("email")
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Not Valid Email"),

    check("password")
        .notEmpty()
        .withMessage("Password is required")
        .isLength({ min:6 })
        .withMessage("Password must be at least 6 characters"),
    
    validatorMiddleware
]

