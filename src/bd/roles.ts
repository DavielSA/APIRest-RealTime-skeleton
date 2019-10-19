import { Collection, MongoError, ObjectID } from "mongodb";
import bd from "./db";

// export interface Rol { id:number, name:string }
export interface eurlRole { url: string; roleid: number; }

export class RoleUrl extends bd {
    constructor() {
        super();
        this.dbName = "bd";
        this.tblName = "urlRole";
        this.Connect();
    }

    public HavePermision(url: eurlRole, callback: any) {
        const filter: any = {
            url: url.url,
            roleid: { $lte : url.roleid}
        };
        this.table.findOne(filter, (err: MongoError, result: Collection) => {
            callback(
                err ? true : false,
                err ? err : result
            );
        });
    }

}
