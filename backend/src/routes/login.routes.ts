import express, {type Request, type Response, type NextFunction} from "express"
import verifyLogin from "../controllers/login.controler.js"

const Login = express()

Login.post("/", async (req:Request, res:Response, next:NextFunction)=>
    {
        const {user_name, password} = req.body
        const user = {
            user_name,
            password
        }
        const  result = verifyLogin(user)
        const token = await result(req, res, next)

        if (!token){
            return res.status(401)
        }
        res.json({"token": token})
        
            
    })

    export default Login;