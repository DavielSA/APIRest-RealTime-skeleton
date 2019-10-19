"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// this will load app which contains our main structure and logic
const app_1 = __importDefault(require("./app"));
const logs_1 = __importDefault(require("./libs/logs"));
const sock_1 = require("./sock");
// const app = new App();
// use this line to get port from environment variable
const PORT = process.env.PORT || 3000;
const socket = new sock_1.Socket(3001);
app_1.default.app.listen(PORT, () => {
    logs_1.default.Log(`server started at http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map