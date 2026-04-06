import "dotenv/config"
import {type Request, type Response} from "express"
import express from "express"
import statusRoute from "./routes/statusRoutes.js"


const PORT = process.env.PORT_SERVER || 3000
const app = express();



app.use(express.json())

app.use('/status', statusRoute);
app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
