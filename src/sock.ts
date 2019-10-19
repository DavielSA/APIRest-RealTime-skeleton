import { Application } from "express";
import { IncomingMessage } from "http";
import * as ws from "ws";
import Auth from "./common/auth";
import logs from "./libs/logs";

export class Socket {
    public sock: ws.Server;
    private port: number;
    private clients: ws[];
    constructor(ports: number) {
        this.port = ports;
        this.sock = new ws.Server({ port: ports }, () => {
            logs.Log(`WebSocketServer start in: ws://localhost:${context.port}/`);
        });
        this.clients = [];
        const context = this;

        this.sock.on("connection",
            (sock: ws, req: IncomingMessage) => context.OnConnect(context, sock, req)
        );

    }
    private OnConnect(context: Socket, socket: ws, req: IncomingMessage) {
        const find = context.clients.find((x) => x === socket);
        if (!find && context.ValidToken(req.headers.authorization)) {
            context.clients.push(socket);
        } else {
            socket.close();
            return false;
        }

        // whenever we receive a 'message' we log it out
        socket.on("welcome", (message: any) => {
            logs.Log("User connected");
            logs.Log(message);
        });

        socket.on("close", () => {
            context.sock.emit("User disconnected");
            const iFind = context.clients.findIndex((x) => x === socket);
            if (iFind > 0) { delete context.clients[iFind]; }
        });
    }
    private async ValidToken(handshake: string) {
        return await Auth.VerifySocket(handshake);
    }
}
