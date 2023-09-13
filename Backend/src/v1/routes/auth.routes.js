import { Router } from "express";
import * as authControllers from "../../controller/loginController.js";
import { validationSchema } from "../../helpers/validatorschema.js";
import { singinSchema, signupSchema } from "../../schemas/loginschema.js";

const B1Auth = Router();

B1Auth.all(
  "/signIn",
  validationSchema(singinSchema),
  authControllers.SingIn
).post("/signUp", validationSchema(signupSchema), authControllers.singUp);

export default B1Auth;
