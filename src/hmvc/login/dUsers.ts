import { Collection, MongoError, WriteOpResult } from "mongodb";
import db from "../../bd/db";
import { Fields } from "./../../bd/configField";
import logs from "./../../libs/logs";
import FieldC from "./fields";
import mUser from "./mUser";

class dUsers extends db {

    constructor() {
        super();
        this.dbName = "bd";
        this.tblName = "usuarios";
        this.Connect();
        this.config = FieldC;
    }

    public GetOne(user: mUser, callback: any) {
        const filter: any = this.Filter(user as any);

        this.table.findOne(filter, (err: MongoError, result: Collection) => {
            callback(
                err ? true : false,
                err ? err : result
            );
        });
    }

    public Create(user: mUser, callback: (error: MongoError, result: WriteOpResult) => any): void {
        try {
            this.table.insertOne(user);
            this.table.save(user, callback);
        } catch (e) {
            logs.Log(e);
            callback(new MongoError(e), null);
        }
    }
}
export default new dUsers();
