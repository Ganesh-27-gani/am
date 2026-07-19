import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import contactRoutes  from "./Routes/contactRoutes.js";
import connectDB from "./config/db.js";
import authroutes from "./Routes/authRoutes.js";

const app = express()

dotenv.config();
connectDB()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extends : true }));

app.use("/api/amfashion", contactRoutes)
app.use("api/auth/amfashion", authroutes)

app.get("/",(req,res)=>{
console.log("hi this ganesh")
res.send("fasion AM")

})

 
app.listen(process.env.PORT, ()=>{
    console.log("Backend connected")
})