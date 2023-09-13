import { check } from "express-validator";

export const singinSchema = [
  check("email").isEmail().notEmpty().withMessage("email is required"),
  check("password").isString().notEmpty().withMessage("password is required"),
];

export const signupSchema = [
  check("username").isString().notEmpty().withMessage("username is required"),
  check("email").isEmail().notEmpty().withMessage("email is required"),
  check("password").isString().notEmpty().withMessage("password is required"),
];
