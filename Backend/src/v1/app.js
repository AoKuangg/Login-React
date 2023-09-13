import { Router } from "express";
import B1Auth from "./routes/auth.routes.js";

const B1 = Router();

B1.use("/auth", B1Auth);

export default B1;
