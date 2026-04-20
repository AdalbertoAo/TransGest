import type{Request, Response, NextFunction} from "express"
import  { CustomError } from "../errors/AppError.js";
import z from "zod"


function validatoinHandleSchema(schema: z.ZodType){
    return (req: Request, res: Response, next: NextFunction ) =>
    { 
        const result = schema.safeParse(req.body)
        if(!result.success)
            {
            const error = new CustomError(`erro de validacao do zod:${result.error.message}`, 422)
            next(error)
            }else {
                next();
            }
            return result.success
    };
}
 
export default validatoinHandleSchema;