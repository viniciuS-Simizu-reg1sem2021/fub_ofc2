"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const celebrate_1 = require("celebrate");
const ContractController_1 = __importDefault(require("../controllers/ContractController"));
const updateContract_schema_1 = __importDefault(require("../../../schemas/updateContract.schema"));
const createContract_schema_1 = __importDefault(require("../../../schemas/createContract.schema"));
const contractRouter = (0, express_1.Router)();
const contractController = new ContractController_1.default();
contractRouter.post('', [(0, celebrate_1.celebrate)({ [celebrate_1.Segments.BODY]: createContract_schema_1.default }, { abortEarly: false })], contractController.create);
contractRouter.get('', contractController.list);
contractRouter.get('/:id', contractController.find);
contractRouter.put('/:id', [(0, celebrate_1.celebrate)({ [celebrate_1.Segments.BODY]: updateContract_schema_1.default }, { abortEarly: false })], contractController.update);
contractRouter.delete('/:id', contractController.delete);
exports.default = contractRouter;
