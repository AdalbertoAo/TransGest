import {type Request, type Response, type NextFunction } from "express"
import type { CustomError } from "../errors/AppError.js"

export function NotFoundError(req:Request, res:Response, next:NextFunction)
{

    res.status(404).send(`Ops! erro ${res.statusCode}, Falha ao localizar a rota ${req.originalUrl}`)
    return ;

}
export default function errorHandlerGlobal (err: CustomError, req: Request, res: Response, next: NextFunction)
{
   const statusCode = err.statusCode || 500

    res.status(statusCode).send(`Ops! erro ${statusCode}, ${err.message}`)

}
