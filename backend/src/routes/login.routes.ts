import express from "express"
import type {Request, Response, NextFunction} from "express"
import { Role } from "../../prisma/generated/prisma/enums.js"
import { CustomError } from "../errors/AppError.js"
import generateToken from "../utils/generateToken.js"

const Login = express()

const USERS = [
    {
        id: "ghfghf", 
        user_name:"AdalbertoAo",
        email:"4dalbertosil@gmail.com",
        password:"6098",
        role:Role.ADMIN,
        created_at: new Date()
    }
]
Login.post("/", (req:Request, res:Response, next:NextFunction)=>
    {
        const {user_name, password} = req.body
        const user = USERS.find(u => u.user_name == user_name && u.password == password)
        if (!user)
            {
                const err = new CustomError("credenciais invalidas", 401)
                next(err)
                return res.status(401)
            }
 
            const token = generateToken(user)

            res.json({token})
            
    })

    export default Login;