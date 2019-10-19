"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../../bd/db"));
class dUsers extends db_1.default {
    constructor() {
        super();
        this.dbName = "lacanasta";
        this.tblName = "usuarios";
        this.Connect();
    }
    GetOne(user, callback) {
        const filter = this.Filter(user);
        this.table.findOne(filter, (err, result) => {
            callback(err ? true : false, err ? err : result);
        });
    }
}
//# sourceMappingURL=dUsers.js.map