import Express from "express";
import cors from "cors";
import "dotenv/config";
import { fileURLToPath } from "url";
import path from "path";
import B1 from "./src/v1/app.js";

const app = Express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIRECTORY = path.join(__dirname, "../../Frontend/dist");


app.use(cors());
app.use(Express.json());

app.use("/", B1);
app.use(Express.static(DIST_DIRECTORY));

let config = JSON.parse(process.env.Server);
app.listen(config, () => {
  console.log(`htpp://${config.hostname}:${config.port}`);
});
