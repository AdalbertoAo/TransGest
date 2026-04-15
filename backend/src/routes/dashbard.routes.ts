 import express from "express"
 import type {Request, Response, NextFunction} from "express"
import authToken from "../middlewares/authToken.middleware.js"
 
const Dashboard = express()

Dashboard.get("/", authToken, (req:Request, res:Response, next:NextFunction)=>{
        res.status(200).send("DASHBOARD")
})

export default Dashboard