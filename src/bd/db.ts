import * as mongodb from "mongodb";
import logs from "./../libs/logs";

export default class DB {
    protected con: mongodb.Db;
    protected dbName: string;
    protected tblName: string;
    protected table: mongodb.Collection;
    private url: string;
    private pool: mongodb.MongoClient;

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
    public Close() {
        this.pool.close();
    }
    /**
     * In this method connect to database and defin the pool conextion, the conection to schema
     * and the access to table.
     */
    protected Connect() {
        this.pool = new mongodb.MongoClient(this.url, {});

        this.pool.connect().then((client: mongodb.MongoClient) => {
            if (this.pool.isConnected()) {
                logs.Log(`Connect to database : ${this.url}`);
            }
            this.con = this.pool.db(this.dbName);
            this.table = this.con.collection(this.tblName);
        });

    }
    /**
     * In this function receibe a entity and make the object with fields of entity a value
     * @param item any entity
     */
    protected Filter(item: any) {
        const fill: any = new Object();
        for (const i in item) {
            if (item[i]) {
                fill[i] = item[i];
            }
        }
        return fill;
    }

}
