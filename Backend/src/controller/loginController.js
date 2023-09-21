import { GenerateToken } from "../jwt/token.js";
import * as LogInservices from "../services/LoginServices.js";

export const SingIn = async (req, res) => {
  try {
    let data = await LogInservices.SingIn(req.body);
    if (!data.length) {
      res.status(404).json({
        status: 404,
        message: "user not found ",
        data: req.body.email,
      });
    } else {
      let jwt = await GenerateToken(data);
      res.status(200).json({
        status: 200,
        message: "user found",
        data: data[0],
        auth: jwt,
      });
    }
  } catch (error) {
    res.status(500).send({
      status: 500,
      errorInfo: {
        message: "error logging in",
        error: error.message,
      },
    });
  }
};

export const singUp = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    let user = await LogInservices.SignUp(req.body);

    if (user) {
      let data = await LogInservices.SingIn({ email, password });
      let jwt = await GenerateToken(data);
      res.status(200).json({
        status: 200,
        message: "user successfully registered",
        data: data[0],
        auth: jwt,
      });
    } else {
      res.status(409).json({ status: 409, message: "user already exists" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 500,
      errorInfo: {
        message: "error registering",
        error: error.message,
      },
    });
  }
};
