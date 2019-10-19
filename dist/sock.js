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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws = __importStar(require("ws"));
const auth_1 = __importDefault(require("./common/auth"));
const logs_1 = __importDefault(require("./libs/logs"));
class Socket {
    constructor(ports) {
        this.port = ports;
        this.sock = new ws.Server({ port: ports }, () => {
            logs_1.default.Log(`WebSocketServer start in: ws://localhost:${context.port}/`);
        });
        this.clients = [];
        const context = this;
        this.sock.on("connection", (sock, req) => context.OnConnect(context, sock, req));
    }
    OnConnect(context, socket, req) {
        const find = context.clients.find((x) => x === socket);
        if (!find && context.ValidToken(req.headers.authorization)) {
            context.clients.push(socket);
        }
        else {
            socket.close();
            return false;
        }
        // whenever we receive a 'message' we log it out
        socket.on("welcome", (message) => {
            logs_1.default.Log("User connected");
            logs_1.default.Log(message);
        });
        socket.on("close", () => {
            context.sock.emit("User disconnected");
            const iFind = context.clients.findIndex((x) => x === socket);
            if (iFind > 0) {
                delete context.clients[iFind];
            }
        });
    }
    ValidToken(handshake) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield auth_1.default.VerifySocket(handshake);
        });
    }
}
exports.Socket = Socket;
//# sourceMappingURL=sock.js.map