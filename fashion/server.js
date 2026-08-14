import dotenv from "dotenv"
dotenv.config();

import express from "express";
import cors from "cors"
import connectDB from "./config/db.js";
import contactRoutes from "./Routes/contactRoutes.js";
import authroutes from "./Routes/authRoutes.js";

const app = express()

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/amfashion", contactRoutes)
app.use("/api/auth/amfashion", authroutes)

app.get("/", (req, res) => {
    console.log("hi this ganesh")
    res.send("fasion AM")

});

const PORT = process.env.PORT || 5000;
const startServer = async () => {
    try {

        await connectDB()

        app.listen(PORT, () => {
            console.log("Backend connected")
        })
    } catch (err) {
        console.log("server failed:", err.message)
    }
};
startServer()