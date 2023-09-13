import Express from "express";
import cors from "cors";
import "dotenv/config";
import LoginApp from "./api/app.js";

const app = Express();

app.use(cors());
app.use(Express.json());


app.use("/login",LoginApp);






let config = JSON.parse(process.env.Server);
app.listen(config,()=>{
    console.log(`htpp://${config.hostname}:${config.port}`);
});