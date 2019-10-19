import bcryptjs from "bcryptjs";
import { Request, Response } from "express";
import jsonwebtoken, { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";
import { AuthToken, Token } from "./../bd/auth_token";
import { RoleUrl } from "./../bd/roles";
import Logs from "./../libs/logs";

class Auth {
    public privateKey: string;
    constructor() {
        this.privateKey = process.env.PRIVATEKEY || "private key";
    }

    /**
     * Make token with entity user using private key defined in .env PRIVATEKEY
     * @param mUser Entity of user
     */
    public MakeToken(mUser: any) {
        try {
            const privateKey: string = process.env.PRIVATEKEY || "private key";
            const timeToExpires: number = 86400; // Expires in 24 hours
            const tokenRenewWal: string = jsonwebtoken.sign(mUser, this.privateKey, {
                expiresIn: timeToExpires * 2 // Expires in 48 hours
            });
            const tokenString: string = jsonwebtoken.sign(mUser, this.privateKey, {
                expiresIn: timeToExpires // expires in 24 hours
            });
            const dToken = new AuthToken();
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
        } catch (e) {
            Logs.Log(e);
            return undefined;
        }

    }

    /**
     * Verify the headers contains autorization code and this value is a valid token
     * @param req Request express
     * @param res Respose express
     * @param next function to continue or not
     */
    public Verify(req: Request, res: Response, next: any) {
        const token: string = req.headers.authorization;
        const privateKey: string = process.env.PRIVATEKEY || "private key";

        jsonwebtoken.verify(token, privateKey, (err: JsonWebTokenError, decoded: any) => {
            if (err) {
                Logs.Log(err);
                return res.status(401).send({});
            }
            const urlActual: string = req.protocol + "://" + req.get("host") + req.originalUrl;
            const dRoleUrl: RoleUrl = new RoleUrl();
            dRoleUrl.HavePermision({ url: urlActual, roleid: decoded.role}, (e: boolean, resul: any) => {
                if (e || !resul ) {
                    return res.status(403).send({});
                }
                next();
            });
        });
    }

    public VerifySocket(token: string) {

        const privateKey: string = process.env.PRIVATEKEY || "private key";

        jsonwebtoken.verify(token, privateKey, (err: JsonWebTokenError, decoded: any) => {
            if (err) {
                Logs.Log(err);
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
    public GetHash(password: string, callback: any) {
        bcryptjs.genSalt(10, (err: any, salt: string) => {
            if (err) {
                Logs.Log(err);
                return callback(true, err);
            }
            bcryptjs.hash(password, salt, (er: any, result: string) => {
                if (er) {
                    Logs.Log(er);
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
    public VerifyHash(password: string, salt: string, callback: any) {
        bcryptjs.hash(password, salt, (err: any, result: string) => {
            if (err) {
                Logs.Log(err);
                return callback(true, err);
            }
            callback(false, result);
        });

    }

}

export default new Auth();
