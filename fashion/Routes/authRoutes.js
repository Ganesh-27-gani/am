import express from "express";
import { register } from "../controlars/authcontrol.js";

const authroutes = express.Router()

authroutes.post("/register",register)


export default authroutes