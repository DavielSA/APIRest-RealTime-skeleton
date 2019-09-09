import express  = require("express");


import  Auth  from './hmvc/seguridad/Auth';
import Router from './hmvc/router';
import { Server } from "net";
import { ServerHttp2Stream } from "http2";
const ruta = new Router();

const app = express();
const port = 8080; // default port to listen

app.use((req,res,next) => {
    res.setHeader('Access-Control-All-Origin','*');
    res.setHeader('Access-Control-All-methods', "GET POST PUT DELETE");
    res.setHeader('Access-Control-All-Headers','true');
    res.setHeader('Access-Control-All-Credentials','true');
});

app.use((req,res,next) => {
    const seguridad = new Auth();
    console.log(req.url);
    console.log(req.method);
    next();
})
// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    // render the index template
    res.send( "Hello world!" );
} );

// start the express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );