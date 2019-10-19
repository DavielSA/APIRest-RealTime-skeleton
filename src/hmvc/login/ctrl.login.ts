import { Router } from "express";
import { Request, Response } from "express";

import Auth from "./../../common/auth";
import dUser from "./dUsers";
import mUser from "./mUser";

class Login {

    public router: Router;
    constructor() {
        this.router = Router();
        this.router.get("/login/v1", Auth.Verify, this.Getv1);
        this.router.post("/login", this.Login);

    }

    private Login(req: Request, res: Response) {
        let entity: mUser;
        entity = req.body;
        // entity.name = req.body.user;
        const pass = req.body.pass;
        if ( !entity.name || !pass) {
            return res.status(401).send({});
        }

        dUser.GetOne(entity, (err: boolean, result: any) => {
            if ( err || !result ) {
                return res.status(401).send(result);
            }
            Auth.VerifyHash(pass, result.privateKey, (er: boolean, hash: string) => {
                if (er || result.hash !== hash) {
                    return res.status(401).send({});
                }
                entity.email = result.email;
                entity.role = result.role;
                entity._id = result._id;
                return res.status(200).send(Auth.MakeToken(entity));
            });

        });

    }

    private Getv1(req: Request, res: Response) {
        const result: any = [
            { id: 1, nombre: "Daviel" },
            { id: 2, nombre: "Daily" }
        ];
        return res.json(result);
    }

}
export default new Login();
