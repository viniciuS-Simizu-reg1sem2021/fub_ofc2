import express from "express";
import { createConnection } from "typeorm";
import { errors } from "celebrate";
import { mainRouter } from "./routes";

const app = express();

app.listen(3000, async () => {
  console.log(`SERVER STARTED ON http://localhost:3000`);
  await createConnection();
});

app.use("v1/fub", mainRouter);
app.use(errors());
