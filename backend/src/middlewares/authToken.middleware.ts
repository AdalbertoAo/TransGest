import "dotenv/config";
import type {Request, Response, NextFunction} from "express"
import JWT from "jsonwebtoken"
import { CustomError } from "../errors/AppError.js";
import type { JwtPayload } from "jsonwebtoken"


export default function authToken(req: Request, res: Response, next: NextFunction)
{

    const authHeader  =req.headers['authorization']
    const token = authHeader?.split(' ')[1]
    const secret = process.env.SECRET_TOKEN || 'secret'

    if (!token){
        const error = new CustomError("voce nao tem permissao para acessar esta rota", 401)
        next(error)
        return res.status(401)    
    }
    JWT.verify(token, secret, (err, user)=>{
        if (err)
        {
            const error = new CustomError(` ${err.message} tendo como causa ${err.cause}`, 401)
            next(error)
            return res.status(401)     
        }
        req.user
        console.log(token)
        console.log(user)
    
        next()
    })
}
