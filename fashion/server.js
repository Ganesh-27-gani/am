import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import contactRoutes  from "./Routes/contactRoutes.js";
import connectDB from "./config/db.js";

const app = express()

dotenv.config();
connectDB()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extends : true }));

app.use("/api/am", contactRoutes)

app.get("/",(req,res)=>{
console.log("hi this ganesh")
res.send("fasion AM")

})

const PORT = 5000;

app.listen(PORT, ()=>{
    console.log("Backend connected")
})