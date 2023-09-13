import "dotenv/config";
import { SignJWT, jwtVerify } from "jose";

export const GenerateToken = async (info) => {
  const { _id, username, email } = info[0];
  let infoToken = {
    id: _id,
    usernmae: username,
    email: email,
  };
  const encoder = new TextEncoder();
  const jwt = await new SignJWT(infoToken)
    .setProtectedHeader({
      alg: "HS256",
      typ: "JWT",
    })
    .setIssuedAt()
    .setExpirationTime("2h")
    .sign(encoder.encode(process.env.PRIVATE_KEY));

  return jwt;
};

export const ValidateToken = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization)
    return res.status(401).send({ token: "Damaged token or invalid token" });
  try {
    const encoder = new TextEncoder();
    req.auth = await jwtVerify(
      authorization,
      encoder.encode(process.env.PRIVATE_KEY)
    );
    next();
  } catch (error) {
    res.status(401).send({
      status: 401,
      errorInfo: { message: "Validation error", error: error },
    });
  }
};
