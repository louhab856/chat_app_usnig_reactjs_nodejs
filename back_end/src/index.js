import express from "express"
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config()
const app = express();
import  authRoutes from '../routes/auth.route.js';
import messageRoutes from '../routes/message.route.js';
import { connectDB } from "../lib/db.js";
app.use(express.json());
app.use(cookieParser())
app.use(cors(
  {
      origin : "http://localhost:5173",
      credentials : true 
  }
));
app.use('/api/auth' , authRoutes);
app.use('/api/messages' , messageRoutes);

const port = process.env.port
app.listen(port , ()=>{
    console.log('the application is runnig on the port ' + port)
    connectDB();
})