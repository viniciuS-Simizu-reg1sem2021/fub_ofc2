import { Router } from "express";
import { celebrate, Segments } from "celebrate";
import ExampleController from "../controllers/ExampleController";
import createExampleSchema from "../../../Schemas/createExample.schema";
import updateExampleSchema from "../../../Schemas/updateExample.schema";

const exampleRouter = Router();
const exampleController = new ExampleController();

exampleRouter.post(
  "",
  [celebrate({ [Segments.BODY]: createExampleSchema }, { abortEarly: false })],
  exampleController.create
);

exampleRouter.get("", exampleController.list);

exampleRouter.get(":id", exampleController.find);

exampleRouter.put(
  ":id",
  [celebrate({ [Segments.BODY]: updateExampleSchema }, { abortEarly: false })],
  exampleController.update
);

exampleRouter.delete(":id", exampleController.delete);

export default exampleRouter;
