"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRepository_1 = __importDefault(require("../../../../../shared/infra/typeorm/repositories/BaseRepository"));
class ExampleRepository extends BaseRepository_1.default {
    constructor() {
        super();
    }
}
exports.default = ExampleRepository;
