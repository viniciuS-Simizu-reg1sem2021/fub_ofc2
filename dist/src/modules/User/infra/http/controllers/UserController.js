"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const ListUserService_1 = __importDefault(require("../../../services/ListUserService"));
const FindUserService_1 = __importDefault(require("../../../services/FindUserService"));
const CreateUserService_1 = __importDefault(require("../../../services/CreateUserService"));
const UpdateUserService_1 = __importDefault(require("../../../services/UpdateUserService"));
const DeleteUserService_1 = __importDefault(require("../../../services/DeleteUserService"));
let UserController = class UserController {
    async create(request, response, next) {
        try {
            const service = tsyringe_1.container.resolve(CreateUserService_1.default);
            const data = request.body;
            response.json(await service.execute(data));
        }
        catch (err) {
            next(err);
        }
    }
    async list(request, response, next) {
        try {
            const service = tsyringe_1.container.resolve(ListUserService_1.default);
            response.json(await service.execute());
        }
        catch (err) {
            next(err);
        }
    }
    async find(request, response, next) {
        try {
            const service = tsyringe_1.container.resolve(FindUserService_1.default);
            const { id } = request.params;
            response.json(await service.execute(Number(id)));
        }
        catch (err) {
            next(err);
        }
    }
    async update(request, response, next) {
        try {
            const service = tsyringe_1.container.resolve(UpdateUserService_1.default);
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
            const service = tsyringe_1.container.resolve(DeleteUserService_1.default);
            const { id } = request.params;
            response.json(await service.execute(Number(id)));
        }
        catch (err) {
            next(err);
        }
    }
};
UserController = __decorate([
    (0, tsyringe_1.injectable)()
], UserController);
exports.default = UserController;
