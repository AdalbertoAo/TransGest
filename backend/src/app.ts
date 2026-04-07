import "dotenv/config"
import {type Request, type Response} from "express"
import express from "express"
import statusRoute from "./routes/statusRoutes.js"


const app = express();



app.use(express.json())

app.use('/status', statusRoute);
app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

export default app;