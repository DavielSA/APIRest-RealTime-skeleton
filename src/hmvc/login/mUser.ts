import {ObjectID} from "mongodb";

interface mUser {
    _id: ObjectID;
    email: string;
    name: string;
    surname: string;
    pictureprofile: string;
    privatekey: string;
    hash: string;
    role: number;
    fcreated: Date;

}
export default mUser;
