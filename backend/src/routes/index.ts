import {Router} from "express"
import StatusRouter from "./status.routes.js"
import HomeRouter from "./home.routes.js"
import LoginRouter from "./login.routes.js"
import DashboardRouter from "./dashbard.routes.js"

export const routes = Router();

routes.use("/status", StatusRouter)
routes.use("/", HomeRouter)
routes.use("/login", LoginRouter)
routes.use("/dashboard", DashboardRouter)