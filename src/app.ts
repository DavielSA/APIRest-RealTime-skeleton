import express from "express";

// used to parse the form data that you pass in the request
import * as bodyParser from "body-parser";

// imports all routes from routes module
import routes from "./hmvc/router";

// cors is using to resolve CORS
import cors from "cors";

class App {
    public app: express.Application;

    constructor() {
        // run the express instance and store in app.
        this.app = express();
        this.config();
    }
    private config(): void {
        // enable cors by addings cors moddleware
        this.app.use(cors());

        // support application/json type post data
        this.app.use(bodyParser.json());

        // support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({extended: false}));

        // Add token headers autorizations
        this.Secutiry();

        // add routes
        this.app.use("/", routes.router);
    }

    private Secutiry(): void {
        this.app.use("/", (req, res, next) => {
            //     const seguridad = new Auth();
            //     // console.log(req.url);
            //     // console.log(req.method);
            next();
        });
    }
}

export default new App();
