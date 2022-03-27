import express from "express";
import { errors } from "celebrate";
import { mainRouter } from "./routes";
import { createConnection } from "typeorm";

const app = express();

app.listen(3000, async () => {
  console.log(`SERVER STARTED ON http://localhost:3000`);
  await createConnection();
});

app.use("v1/fub", mainRouter);
app.use(errors());
