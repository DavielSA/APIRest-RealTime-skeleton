// this will load app which contains our main structure and logic
import App from "./app";
import Logs from "./libs/logs";
import {Socket} from "./sock";

// const app = new App();

// use this line to get port from environment variable
const PORT: string | number = process.env.PORT || 3000;

const socket: Socket = new Socket( 3001 );

App.app.listen(PORT, () => {
    Logs.Log(`server started at http://localhost:${PORT}`);
});
