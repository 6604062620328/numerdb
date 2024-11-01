import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import fs from "fs";
import {swaggerSpec,swaggerUi} from './config/swaggerConfig.js'
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());

fs.readdirSync("./routers").forEach(async (c) => {
  const route = await import(`./routers/${c}`);
  app.use("/api", route.default);
});

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(5000, () => {
  console.log("CORS-enabled web server listening on port 5000");
});
