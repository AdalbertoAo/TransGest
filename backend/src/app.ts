import "dotenv/config"
import express, {type Request, type Response, type NextFunction} from "express"
import statusRoute from "./routes/status.routes.js"
import {routes} from "./routes/index.js"
import errorHandlerGlobal, {NotFoundError} from "./middlewares/error.middlewares.js";


const app = express();

app.use(express.json())
app.use('/status', statusRoute);
app.use(routes)

app.use(NotFoundError)
app.use(errorHandlerGlobal)


export default app;