import * as mongo from "mongodb";

interface mUser {
    _id: mongo.ObjectID;
    name: string;
    email: string;
    privatekey: string;
    hash: string;
    role: number;

}
export default mUser;
