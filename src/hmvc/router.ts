import { Router } from "express";

import glob from "glob";
import path from "path";

const router = Router();
const controllers: any[] = [];

// glob.sync("./**/ctrl.*.ts").forEach( (file: string) => {
//      const ctrl = require(path.resolve(file))(router);
//      controllers.push(ctrl);
//  });

export default { router, controllers};
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
