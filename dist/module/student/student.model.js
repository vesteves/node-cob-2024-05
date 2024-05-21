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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = exports.getAll = void 0;
const knex_1 = __importDefault(require("../../service/knex"));
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, knex_1.default)('students').select();
    return result;
});
exports.getAll = getAll;
const store = (_a) => __awaiter(void 0, [_a], void 0, function* ({ nome, idade }) {
    const result = yield (0, knex_1.default)('students').insert({
        nome,
        idade
    });
    return result;
});
exports.store = store;
