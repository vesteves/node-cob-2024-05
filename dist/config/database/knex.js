"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.conn = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.conn = {
    client: 'pg',
    connection: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
        user: process.env.DB_USERNAME || 'username',
        database: process.env.DB_NAME || 'postgres',
        password: process.env.DB_PASSWORD || 'password',
        ssl: false,
    },
};
