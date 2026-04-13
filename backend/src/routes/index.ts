import {Router} from "express"
import StatusRouter from "./status.routes.js";
import HomeRouter from "./home.routes.js"
export const routes = Router();

routes.use("/status", StatusRouter)
routes.use("/", HomeRouter)