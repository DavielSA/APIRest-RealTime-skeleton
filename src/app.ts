import express from "express";

// used to parse the form data that you pass in the request
import * as bodyParser from "body-parser";

// cors is using to resolve CORS
import cors from "cors";

// imports all routes from routes module
import routes from "./hmvc/router";
import logs from "./libs/logs";

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

        let i: number = 0;
        // add routes
        for (i = 0; i < routes.length; i++) {
            this.app.use("/", routes[i]);
        }
    }

}

export default new App();
