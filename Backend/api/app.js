import { Router } from "express";

const LoginApp = Router();

LoginApp.get("/Inicio", (req, res) => {
    res.json({
        mensaje: "Bienvenido a la API de Login"
    });
});
LoginApp.post("/", (req, res) => {
    let data = req.body;
    
});

export default LoginApp;