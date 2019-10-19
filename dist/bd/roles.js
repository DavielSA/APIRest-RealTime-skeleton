"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("./db"));
class RoleUrl extends db_1.default {
    constructor() {
        super();
        this.dbName = "bd";
        this.tblName = "urlRole";
        this.Connect();
    }
    HavePermision(url, callback) {
        const filter = {
            url: url.url,
            roleid: { $lte: url.roleid }
        };
        this.table.findOne(filter, (err, result) => {
            callback(err ? true : false, err ? err : result);
        });
    }
}
exports.RoleUrl = RoleUrl;
//# sourceMappingURL=roles.js.map