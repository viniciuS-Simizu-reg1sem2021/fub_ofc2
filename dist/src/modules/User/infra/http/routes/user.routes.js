"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const celebrate_1 = require("celebrate");
const UserController_1 = __importDefault(require("../controllers/UserController"));
const createUser_schema_1 = __importDefault(require("../../../schemas/createUser.schema"));
const updateUser_schema_1 = __importDefault(require("../../../schemas/updateUser.schema"));
const userRouter = (0, express_1.Router)();
const userController = new UserController_1.default();
userRouter.post('', [(0, celebrate_1.celebrate)({ [celebrate_1.Segments.BODY]: createUser_schema_1.default }, { abortEarly: false })], userController.create);
userRouter.get('', userController.list);
userRouter.get('/:id', userController.find);
userRouter.put('/:id', [(0, celebrate_1.celebrate)({ [celebrate_1.Segments.BODY]: updateUser_schema_1.default }, { abortEarly: false })], userController.update);
userRouter.delete('/:id', userController.delete);
exports.default = userRouter;
