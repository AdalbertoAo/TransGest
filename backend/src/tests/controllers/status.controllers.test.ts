import {expect, test, describe, expectTypeOf} from "vitest"
import Request from "supertest"
import app from "../../app.js"
import type { PgStatResult } from "../../interfaces/interface.js"
import prisma from "../../lib/prisma.js"




describe("All tests for endpoint ./status", ()=>{

    test("GET status code to 200",async ()=>{
     const response =   await Request(app).get("/status");
     expect(response.status).toBe(200)
       
    }, 15000)

    test("response to endpoint is true", async ()=>{
        let date = new Date()
        const db= {
            database: {
                "timestamp": date.toLocaleDateString(),
                "status": "ok",
                "instancias no banco": 1
            }
           
        }
    
        const response = await Request(app).get("/status");
        const responseBody = response.body

        expect(responseBody).toMatchObject(db)
     
    })
    test("if typeof to instancias is BigInt", async ()=>{
        
        const result:PgStatResult[] = await prisma.$queryRaw `SELECT count(*) FROM pg_stat_activity WHERE state = 'active';`;
        
            expect(result[0]?.count ).toBeTypeOf("bigint")
    })
})