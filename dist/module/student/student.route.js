"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const student_model_1 = require("./student.model");
const route = (0, express_1.Router)();
route.post('/students', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, student_model_1.store)({
        nome: req.body.nome,
        idade: req.body.idade
    });
    return res.json(result);
}));
route.get('/students', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, student_model_1.getAll)();
    return res.json(result);
}));
exports.default = route;
