"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// this will load app which contains our main structure and logic
const app_1 = __importDefault(require("./app"));
const logs_1 = __importDefault(require("./libs/logs"));
// const app = new App();
// use this line to get port from environment variable
const PORT = process.env.PORT || 3000;
app_1.default.app.listen(PORT, () => {
    logs_1.default.Log(`server started at http://localhost:${PORT}`);
});
// import express  = require("express");
// import { ServerHttp2Stream } from "http2";
// import { Server } from "net";
// import Auth from "./hmvc/seguridad/Auth";
// // import Router from "./hmvc/router";
// import LOGS from "./libs/logs";
// // const ruta = new Router();
// const Logs = new LOGS();
// const app = express();
// Logs.Log(typeof(app));
// const port = 8080; // default port to listen
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-All-Origin", "*");
//     res.setHeader("Access-Control-All-methods", "GET POST PUT DELETE");
//     res.setHeader("Access-Control-All-Headers", "true");
//     res.setHeader("Access-Control-All-Credentials", "true");
// });
// app.use((req, res, next) => {
//     const seguridad = new Auth();
//     // console.log(req.url);
//     // console.log(req.method);
//     next();
// });
// // define a route handler for the default home page
// app.get( "/", ( req, res ) => {
//     // render the index template
//     res.send( "Hello world!" );
// } );
// // start the express server
// app.listen( port, () => {
//     // tslint:disable-next-line:no-console
//
// } );
//# sourceMappingURL=index.js.map