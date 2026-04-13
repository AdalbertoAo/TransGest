import type{Request, Response, NextFunction} from "express"
import  { CustomError } from "../errors/AppError.js";
import z from "zod"


function validatoinHandleSchema(schema: z.ZodType){
    return (req: Request, res: Response, next: NextFunction ) =>
    { 
        const result = schema.safeParse(req.body)
        if(!result.success)
            {
            const error = new CustomError(result.error.message, 422)
            next(error)
            }else {
                next();
            }

    };
}
 
export default validatoinHandleSchema;