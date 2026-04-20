

import type { NextFunction, Request, Response } from "express"
import prisma from "../lib/prisma.js"
import { CustomError } from "../errors/AppError.js"
import generateToken from "../utils/generateToken.js"

interface userBody
    {
        user_name: string,
        password:string,

    }


export default function  verifyLogin(user:userBody ){
    return async (req:Request, res:Response, next:NextFunction) => {
       
    const users = await prisma.user.findMany()
    
    const result = users.find(u => u.user_name == user.user_name && u.password == user.password )
    // console.log(result)
            if (!result)
                {
                    const err = new CustomError("credenciais invalidas", 401)
                    next(err)
                    return ;
                }
                const token = generateToken(result)
                return token
    }
    
}