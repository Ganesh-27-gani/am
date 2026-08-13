import express from "express";
import { login, otpVerify, register, reSendOTP } from "../controlars/authcontrol.js";

const authroutes = express.Router()

authroutes.post("/register",register)
authroutes.post("/otpverify", otpVerify)
authroutes.post("/resendotp", reSendOTP )
authroutes.post("/login", login )

export default authroutes