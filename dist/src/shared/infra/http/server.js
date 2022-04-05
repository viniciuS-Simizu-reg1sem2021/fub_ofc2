"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const celebrate_1 = require("celebrate");
const routes_1 = require("./routes");
const typeorm_1 = require("typeorm");
const app = (0, express_1.default)();
app.listen(3000, async () => {
    console.log(`SERVER STARTED ON http://localhost:3000`);
    await (0, typeorm_1.createConnection)();
});
app.use('v1/fub', routes_1.mainRouter);
app.use((0, celebrate_1.errors)());
/**
 * TODO: VERIFICAR SE AS TABELAS AUXILIARES PRECISAM DE ALGO &
 *  CONSERTAR O PROBLEMA DO ORMCONFIG
 *  VERIFICAR SE O BASEREPOSITORY FUNCIONA
 *  VERIFICAR COMO FAZER O SCHEMA DO USER
 *  SCHEMA FAZENDO A LIGAÇÃO ENTRE MAIS DE UM MODULO
 *  VERIFICAR SE OS MODULOS DEFAULT ESTÃO CERTOS
 *  CONSERTAR A LIGAÇÃO ENTRE MODULOS, ADICIONANDO O MANY TO ONE, ONE TO MANY E AFINS
 *  REFATORAR TODAS AS ENTIDADES, PROVAVELMENTE O ÚNICO ERRADO
 **/
