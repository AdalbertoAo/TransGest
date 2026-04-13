import express, {type Request, type Response, type NextFunction} from "express"
import { CustomError } from "../errors/AppError.js";

const Home = express()
 

Home.get("/", (req:Request, res:Response, next: NextFunction)=>{
    res.status(200).send("Hello World");
})

export default Home