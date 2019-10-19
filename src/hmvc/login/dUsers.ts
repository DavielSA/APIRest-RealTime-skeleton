import { Collection, MongoError } from "mongodb";
import db from "../../bd/db";
import mUser from "./mUser";

class dUsers extends db {

    constructor() {
        super();
        this.dbName = "bd";
        this.tblName = "usuarios";
        this.Connect();
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

}
export default new dUsers();
