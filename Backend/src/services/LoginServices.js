import { connDB } from "../db/connectDB.js";

//Sign In
export const SingIn = async (info) => {
  let db = await connDB();
  let collection = db.collection("usuarios");
  let resultado = await collection
    .find({ email: info.email, password: info.password })
    .toArray();

  if (!resultado.length) return [];
  return [
    {
      _id: resultado[0]._id,
      username: resultado[0].username,
      email: resultado[0].email,
    },
  ];
};

//Sign UP

export const SignUp = async (info) => {
  let db = await connDB();
  let collection = db.collection("usuarios");

  let user = await collection.find({ email: info.email }).toArray();

  if (!user.length) {
    await collection.insertOne(info);
    return true;
  } else {
    return false;
  }
};
