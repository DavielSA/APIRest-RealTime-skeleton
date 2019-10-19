import express from "express";
import { Request, Response } from "express";

export default class Auth {

    public app: express.Application;
     constructor(app: express.Application) {
         this.app = app;

         this.app.get("/login/v1", this.Getv1);
    }

    private Getv1(req: Request, res: Response) {
        const result: any = [
            {id: 1, nombre: "Daviel"},
            {id: 2, nombre: "Daily"}
        ];
        return res.json(result);
    }

}
