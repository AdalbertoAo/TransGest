import {type Request, type Response} from "express"
import prisma from "../lib/prisma.js";
import type { PgStatResult, DatabaseStatus} from "../interfaces/interface.js";


export default async function  getStatus(req:Request, res:Response){
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
      }
      res.json({
        "database":{
          "timestamp": database.timestamp.toLocaleDateString(),
          "status": database.status ? "ok" : "error",
          "instancias no banco": database.instancias
          
        }
        
      })
      
}