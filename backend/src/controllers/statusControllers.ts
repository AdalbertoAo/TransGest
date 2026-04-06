import {type Request, type Response} from "express"
import prisma from "../lib/prisma.js";
import type { PgStatResult } from "../interfaces/interface.js";

export default async function  getStatus(req:Request, res:Response){
    try {
        const result:PgStatResult[] = await prisma.$queryRaw `SELECT count(*) FROM pg_stat_activity WHERE state = 'active';`;
    
        if (!result || !result[0])
            return res.status(500).json({error: "Falha  a retornar as instancias no db"})
        else
          res.json({
                  "Instancias no banco": Number(result[0].count),
                });
      } catch (error) {
        return res.status(500).json({error: "Falha  na ligacao do banco de dados"})
      }
}