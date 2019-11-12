"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const db_1 = __importDefault(require("../../bd/db"));
const logs_1 = __importDefault(require("./../../libs/logs"));
const fields_1 = __importDefault(require("./fields"));
class dUsers extends db_1.default {
    constructor() {
        super();
        this.dbName = "bd";
        this.tblName = "usuarios";
        this.Connect();
        this.config = fields_1.default;
    }
    GetOne(user, callback) {
        const filter = this.Filter(user);
        this.table.findOne(filter, (err, result) => {
            callback(err ? true : false, err ? err : result);
        });
    }
    Create(user, callback) {
        try {
            this.table.insertOne(user);
            this.table.save(user, callback);
        }
        catch (e) {
            logs_1.default.Log(e);
            callback(new mongodb_1.MongoError(e), null);
        }
    }
}
exports.default = new dUsers();
//# sourceMappingURL=dUsers.js.map