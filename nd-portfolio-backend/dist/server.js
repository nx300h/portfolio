"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const database_1 = __importDefault(require("./config/database"));
const PORT = process.env.PORT || 3000; // Change 3001 to any available port number
database_1.default.sync().then(() => {
    app_1.default.listen(PORT, () => {
        console.log(`Server is running on htp://localhost:${PORT}`);
    });
});
