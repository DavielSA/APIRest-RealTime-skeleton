import { FORMAT } from "./../../bd/format";
export default [
    {
        key: "_id",
        field: "id",
        error: "This field is required",
        insert: false,
        update: true,
        view: true,
        format: FORMAT.MongoId
    },
    {
        key: "email",
        field: "email",
        error: "You need input valid email",
        insert: true,
        update: false,
        view: true,
        format: FORMAT.Email
    },
    {
        key: "name",
        field: "name",
        error: "Invalid field",
        insert: true,
        update: false,
        view: true,
        format: FORMAT.String
    },
    {
        key: "surname",
        field: "surname",
        error: "",
        insert: false,
        update: false,
        view: true,
        format: FORMAT.String
    },
    {
        key: "pictureprofile",
        field: "img",
        error: "",
        insert: false,
        update: false,
        view: true,
        format: FORMAT.String
    },
    {
        key: "privatekey",
        field: "privatekey",
        error: "",
        insert: false,
        update: false,
        view: false,
        format: FORMAT.String
    },
    {
        key: "hash",
        field: "hash",
        error: "",
        insert: false,
        update: false,
        view: false,
        format: FORMAT.String
    },
    {
        key: "role",
        field: "role",
        error: "",
        insert: false,
        update: false,
        view: true,
        format: FORMAT.Int
    },
    {
        key: "fcreated",
        field: "fcreated",
        error: "",
        insert: false,
        update: false,
        view: true,
        format: FORMAT.Date
    }
];
