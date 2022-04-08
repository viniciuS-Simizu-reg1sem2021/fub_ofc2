"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const ListContractService_1 = __importDefault(require("../../../services/ListContractService"));
const FindContractService_1 = __importDefault(require("../../../services/FindContractService"));
const CreateContractService_1 = __importDefault(require("../../../services/CreateContractService"));
const UpdateContractService_1 = __importDefault(require("../../../services/UpdateContractService"));
const DeleteContractService_1 = __importDefault(require("../../../services/DeleteContractService"));
let ContractController = class ContractController {
    async create(request, response, next) {
        try {
            const service = tsyringe_1.container.resolve(CreateContractService_1.default);
            const data = request.body;
            response.json(await service.execute(data));
        }
        catch (err) {
            next(err);
        }
    }
    async list(request, response, next) {
        try {
            const service = tsyringe_1.container.resolve(ListContractService_1.default);
            response.json(await service.execute());
        }
        catch (err) {
            next(err);
        }
    }
    async find(request, response, next) {
        try {
            const service = tsyringe_1.container.resolve(FindContractService_1.default);
            const { id } = request.params;
            response.json(await service.execute(Number(id)));
        }
        catch (err) {
            next(err);
        }
    }
    async update(request, response, next) {
        try {
            const service = tsyringe_1.container.resolve(UpdateContractService_1.default);
            const { id } = request.params;
            const data = request.body;
            response.json(await service.execute(Number(id), data));
        }
        catch (err) {
            next(err);
        }
    }
    async delete(request, response, next) {
        try {
            const service = tsyringe_1.container.resolve(DeleteContractService_1.default);
            const { id } = request.params;
            response.json(await service.execute(Number(id)));
        }
        catch (err) {
            next(err);
        }
    }
};
ContractController = __decorate([
    (0, tsyringe_1.injectable)()
], ContractController);
exports.default = ContractController;
