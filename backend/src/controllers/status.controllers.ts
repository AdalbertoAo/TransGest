import {type Request, type Response, type NextFunction} from "express"
import prisma from "../lib/prisma.js";
import type { PgStatResult, DatabaseStatus} from "../interfaces/interface.js";
import  { CustomError } from "../errors/AppError.js";


export default async function  getStatus(req:Request, res:Response, next: NextFunction){
  let database:DatabaseStatus = {
    instancias: 0,
    status: true,
    timestamp: new Date()
  }
  
    try {
     
      const result:PgStatResult[] = await prisma.$queryRaw `SELECT count(*) FROM pg_stat_activity WHERE state = 'active';`;

        if (!result || !result[0])
            database.status = false
        else
          database.instancias = Number(result[0].count)  
          database.status = true
      } catch (error) {
        database.status = false
        next(error)
      }
      res.json({
        "database":{
          "timestamp": database.timestamp.toLocaleDateString(),
          "status": database.status ? "ok" : "error",
          "instancias no banco": database.instancias
          
        }
        
      })
      
}