"use strict";
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
const mongodb = __importStar(require("mongodb"));
const logs_1 = __importDefault(require("./../libs/logs"));
class DB {
    /**
     * Instanciamos la clase. Aquí obtenemos de .env
     * en la variable DB_URL la url de conexión a la BD,
     * si no existe usamos por default "mongodb://localhost:27017"
     */
    constructor() {
        this.url = process.env.DB_URL || "mongodb://localhost:27017";
    }
    /**
     * In this method close the connection
     */
    Close() {
        this.pool.close();
    }
    /**
     * In this method connect to database and defin the pool conextion, the conection to schema
     * and the access to table.
     */
    Connect() {
        this.pool = new mongodb.MongoClient(this.url, {});
        this.pool.connect().then((client) => {
            if (this.pool.isConnected()) {
                logs_1.default.Log(`Connect to database : ${this.url}`);
            }
            this.con = this.pool.db(this.dbName);
            this.table = this.con.collection(this.tblName);
        });
    }
    /**
     * In this function receibe a entity and make the object with fields of entity a value
     * @param item any entity
     */
    Filter(item) {
        const fill = new Object();
        for (const i in item) {
            if (item[i]) {
                fill[i] = item[i];
            }
        }
        return fill;
    }
}
exports.default = DB;
//# sourceMappingURL=db.js.map