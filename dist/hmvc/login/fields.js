"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const format_1 = require("./../../bd/format");
exports.default = [
    {
        key: "_id",
        field: "id",
        error: "This field is required",
        insert: false,
        update: true,
        view: true,
        format: format_1.FORMAT.MongoId
    },
    {
        key: "email",
        field: "email",
        error: "You need input valid email",
        insert: true,
        update: false,
        view: true,
        format: format_1.FORMAT.Email
    },
    {
        key: "name",
        field: "name",
        error: "Invalid field",
        insert: true,
        update: false,
        view: true,
        format: format_1.FORMAT.String
    },
    {
        key: "surname",
        field: "surname",
        error: "",
        insert: false,
        update: false,
        view: true,
        format: format_1.FORMAT.String
    },
    {
        key: "pictureprofile",
        field: "img",
        error: "",
        insert: false,
        update: false,
        view: true,
        format: format_1.FORMAT.String
    },
    {
        key: "privatekey",
        field: "privatekey",
        error: "",
        insert: false,
        update: false,
        view: false,
        format: format_1.FORMAT.String
    },
    {
        key: "hash",
        field: "hash",
        error: "",
        insert: false,
        update: false,
        view: false,
        format: format_1.FORMAT.String
    },
    {
        key: "role",
        field: "role",
        error: "",
        insert: false,
        update: false,
        view: true,
        format: format_1.FORMAT.Int
    },
    {
        key: "fcreated",
        field: "fcreated",
        error: "",
        insert: false,
        update: false,
        view: true,
        format: format_1.FORMAT.Date
    }
];
//# sourceMappingURL=fields.js.map