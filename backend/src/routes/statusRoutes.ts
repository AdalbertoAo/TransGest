import express from "express"
import getStatus from "../controllers/statusControllers.js";

// rotter e o objecto roteador que irei usar
 const router = express.Router();

 router.get('/',getStatus)

  export default router;
