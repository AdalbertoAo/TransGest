import express from "express"
import getStatus from "../controllers/status.controllers.js";

// rotter e o objecto roteador que irei usar
 const Statusrouter = express.Router();

 Statusrouter.get('/',getStatus)

  export default Statusrouter;
