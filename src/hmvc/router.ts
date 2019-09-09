
import glob = require('glob');
import path = require('path');

let controllers:any[]=[];

glob.sync('./**/ctrl.*.ts').forEach( (file:string) => {
    let ctrl = require(path.resolve(file));
    controllers.push(ctrl);
});
//import * as controllers from './*/ctrl.*.ts';



export default class Router {
    constructor() {
        //this.App=app;
        console.log("*******");
        console.log(controllers)
    }
}