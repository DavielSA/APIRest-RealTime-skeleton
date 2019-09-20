"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const controllers = [];
// glob.sync("./**/ctrl.*.ts").forEach( (file: string) => {
//      const ctrl = require(path.resolve(file))(router);
//      controllers.push(ctrl);
//  });
exports.default = { router, controllers };
// import glob = require("glob");
// import path = require("path");
// const controllers: any[] = [];
// glob.sync("./**/ctrl.*.ts").forEach( (file: string) => {
//     const ctrl = require(path.resolve(file));
//     controllers.push(ctrl);
// });
/*export default (app: Express.Application) => {

};*/
// export default class Router {
//     constructor() {
//         // this.App=app;
//         // console.log("*******");
//         // console.log(controllers);
//     }
// }
//# sourceMappingURL=router.js.map