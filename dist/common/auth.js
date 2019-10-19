"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_token_1 = require("./../bd/auth_token");
const roles_1 = require("./../bd/roles");
const logs_1 = __importDefault(require("./../libs/logs"));
class Auth {
    constructor() {
        this.privateKey = process.env.PRIVATEKEY || "private key";
    }
    /**
     * Make token with entity user using private key defined in .env PRIVATEKEY
     * @param mUser Entity of user
     */
    MakeToken(mUser) {
        try {
            const privateKey = process.env.PRIVATEKEY || "private key";
            const timeToExpires = 86400; // Expires in 24 hours
            const tokenRenewWal = jsonwebtoken_1.default.sign(mUser, this.privateKey, {
                expiresIn: timeToExpires * 2 // Expires in 48 hours
            });
            const tokenString = jsonwebtoken_1.default.sign(mUser, this.privateKey, {
                expiresIn: timeToExpires // expires in 24 hours
            });
            const dToken = new auth_token_1.AuthToken();
            const TokenexpiresIn = new Date();
            const TokenrenewalexpiresIn = TokenexpiresIn;
            TokenexpiresIn.setHours(24);
            TokenrenewalexpiresIn.setHours(48);
            dToken.Save({
                user: mUser._id,
                token: tokenString,
                token_expiresIn: TokenexpiresIn,
                tokenrenewal: tokenRenewWal,
                tokenrenewal_expiresIn: TokenrenewalexpiresIn,
                fcreated: (new Date())
            });
            return tokenString;
        }
        catch (e) {
            logs_1.default.Log(e);
            return undefined;
        }
    }
    /**
     * Verify the headers contains autorization code and this value is a valid token
     * @param req Request express
     * @param res Respose express
     * @param next function to continue or not
     */
    Verify(req, res, next) {
        const token = req.headers.authorization;
        const privateKey = process.env.PRIVATEKEY || "private key";
        jsonwebtoken_1.default.verify(token, privateKey, (err, decoded) => {
            if (err) {
                logs_1.default.Log(err);
                return res.status(401).send({});
            }
            const urlActual = req.protocol + "://" + req.get("host") + req.originalUrl;
            const dRoleUrl = new roles_1.RoleUrl();
            dRoleUrl.HavePermision({ url: urlActual, roleid: decoded.role }, (e, resul) => {
                if (e || !resul) {
                    return res.status(403).send({});
                }
                next();
            });
        });
    }
    VerifySocket(token) {
        const privateKey = process.env.PRIVATEKEY || "private key";
        jsonwebtoken_1.default.verify(token, privateKey, (err, decoded) => {
            if (err) {
                logs_1.default.Log(err);
                return false;
            }
            return true;
        });
    }
    /**
     * This method generate salt and hash.
     * When detect error return true, error
     * When its true return false, salt,hash
     * @param password pass user
     * @param callback function or element callback to respond
     */
    GetHash(password, callback) {
        bcryptjs_1.default.genSalt(10, (err, salt) => {
            if (err) {
                logs_1.default.Log(err);
                return callback(true, err);
            }
            bcryptjs_1.default.hash(password, salt, (er, result) => {
                if (er) {
                    logs_1.default.Log(er);
                    return callback(true, er);
                }
                callback(false, { salt, hash: result });
            });
        });
    }
    /**
     * This method generate hash for password and salt.
     * When detect error return true, error
     * When its true return false, salt,hash
     * @param password pass user
     * @param callback function or element callback to respond
     */
    VerifyHash(password, salt, callback) {
        bcryptjs_1.default.hash(password, salt, (err, result) => {
            if (err) {
                logs_1.default.Log(err);
                return callback(true, err);
            }
            callback(false, result);
        });
    }
}
exports.default = new Auth();
//# sourceMappingURL=auth.js.map