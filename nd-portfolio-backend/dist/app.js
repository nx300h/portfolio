"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const profileRoutes_1 = __importDefault(require("./routes/profileRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(profileRoutes_1.default);
// Add other route middlewares similarly
exports.default = app;
