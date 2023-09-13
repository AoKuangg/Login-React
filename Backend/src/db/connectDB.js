import "dotenv/config";
import { MongoClient } from "mongodb";

const URI = `mongodb+srv://AoKuang:MilPesosBro@cluster0.j4ctnar.mongodb.net/loginReact`;

export async function connDB() {
  const client = new MongoClient(URI);
  try {
    await client.connect();
    const db = client.db();
    return db;
  } catch (error) {
    throw new Error({ message: "CONEXIÓN RECHAZADA", error: error.message });
  }
}
