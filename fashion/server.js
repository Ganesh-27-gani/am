import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import contactRoutes  from "./Routes/contactRoutes.js";

const app = express()

dotenv.config();

app.use(cors());

app.use(express.urlencoded({extends : true}));

app.use("api/am", contactRoutes)


app.get("/",(req,res)=>{
console.log("hi this ganesh")
res.send("fasion AM")

 
})

const PORT = 5000;

app.listen(PORT, ()=>{
    console.log("Backend connected")
})