"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("./../../common/auth"));
const dUsers_1 = __importDefault(require("./dUsers"));
class Login {
    constructor() {
        this.router = express_1.Router();
        this.router.get("/login/v1", auth_1.default.Verify, this.Getv1);
        this.router.post("/login", this.Login);
    }
    Login(req, res) {
        let entity;
        entity = req.body;
        // entity.name = req.body.user;
        const pass = req.body.pass;
        if (!entity.name || !pass) {
            return res.status(401).send({});
        }
        dUsers_1.default.GetOne(entity, (err, result) => {
            if (err || !result) {
                return res.status(401).send(result);
            }
            auth_1.default.VerifyHash(pass, result.privateKey, (er, hash) => {
                if (er || result.hash !== hash) {
                    return res.status(401).send({});
                }
                entity.email = result.email;
                entity.role = result.role;
                entity._id = result._id;
                return res.status(200).send(auth_1.default.MakeToken(entity));
            });
        });
    }
    Getv1(req, res) {
        const result = [
            { id: 1, nombre: "Daviel" },
            { id: 2, nombre: "Daily" }
        ];
        return res.json(result);
    }
}
exports.default = new Login();
//# sourceMappingURL=ctrl.login.js.map