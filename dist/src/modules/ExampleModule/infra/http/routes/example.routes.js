"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const celebrate_1 = require("celebrate");
const ExampleController_1 = __importDefault(require("../controllers/ExampleController"));
const createExample_schema_1 = __importDefault(require("../../../schemas/createExample.schema"));
const updateExample_schema_1 = __importDefault(require("../../../schemas/updateExample.schema"));
const exampleRouter = (0, express_1.Router)();
const exampleController = new ExampleController_1.default();
exampleRouter.post('', [(0, celebrate_1.celebrate)({ [celebrate_1.Segments.BODY]: createExample_schema_1.default }, { abortEarly: false })], exampleController.create);
exampleRouter.get('', exampleController.list);
exampleRouter.get('/:id', exampleController.find);
exampleRouter.put('/:id', [(0, celebrate_1.celebrate)({ [celebrate_1.Segments.BODY]: updateExample_schema_1.default }, { abortEarly: false })], exampleController.update);
exampleRouter.delete('/:id', exampleController.delete);
exports.default = exampleRouter;
