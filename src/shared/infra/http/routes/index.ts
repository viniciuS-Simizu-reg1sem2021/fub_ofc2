import { Router } from "express";
import exampleRoutes from "../../../../modules/ExampleModule/infra/http/routes/example.routes";

const mainRouter = Router();

mainRouter.use("/example", exampleRoutes);

export { mainRouter };
