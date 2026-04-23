import "dotenv/config"
import express, {type Request, type Response, type NextFunction} from "express"
import {routes} from "./routes/index.js"
import errorHandlerGlobal, {NotFoundError} from "./middlewares/error.middlewares.js";
import cors from "cors"


const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.use(NotFoundError);
app.use(errorHandlerGlobal);

export default app;
