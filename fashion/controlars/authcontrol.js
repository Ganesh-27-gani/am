import Auth from "../models/authmodel.js";
import sendEmail from "../Utils/sendOTP.js";
import sendPhoneOTP from "../Utils/sendPhone.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {

    try {

        const { fullName, email, phone, password, verifyMethod } = req.body;

        if (!fullName || !email || !phone || !password || !verifyMethod) {
            return res.status(400).json({ success: false, message: "All felds are required" });

        }

        const emailExists = await Auth.findOne({ email });

        if (emailExists) {
            return res.status(400).json({ success: false, message: "email already exists" });
        };

        const phoneExists = await Auth.findOne({ phone })

        if (phoneExists) {
            return res.status(400).json({ success: false, message: "Phone number alredy exists" });

        }

        const otp = Math.floor(100000 + Math.random() * 900000).toString();

        const otpExpires = new Date(Date.now() + 5 * 60 * 1000);

        const user = await Auth.create({
            fullName,
            email,
            phone,
            password,
            verifyMethod,
            otp,
            otpExpires,
        });

        if (verifyMethod == "email") {
            //console.log(`Email OTP : ${otp}`)
            await sendEmail(email, otp);
        } else {
            // console.log(`Phone OTP ${otp}`);

            await sendPhoneOTP(phone, otp);

        }
        return res.status(200).json({ success: true, message: `Otp sent successfully ${verifyMethod}` })

    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
}

export const otpVerify = async (req, res) => {

    try {
        const { email, phone, otp } = req.body;

        if (!otp) {
            return res.status(400).json({ success: false, message: "OtP is required" })
        };
        if (!email && !phone) {
            return res.status(400).json({ success: false, message: "Email or Phone is required" })
        };

        let user;

        if (email) {
            user = await Auth.findOne({ email });
        } else {
            user = await Auth.findOne({ phone });

        }
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        if (!user.otpExpires || user.otpExpires < new Date()) {
            return res.status(400).json({ success: false, message: "OTP has expired. Plese resend OTP." });
        }
        if (user.otp !== otp) {
            return res.status(400).json({ success: false, message: "Invalid OTP" });
        }

        user.isVerified = true;

        user.otp = undefined;
        user.otpExpires = undefined;

        await user.save();

        return res.status(200).json({ success: true, message: "OTP verified successfully" });

    } catch (err) {
        console.log(err.message);

        return res.status(500).json({ success: false, message: err.message })

    }
}

export const reSendOTP = async (req, res)=>{

    try{
        const {email, phone} = req.body;

        return res.status(400).json({success:false, message:"Email or Phone is required"})

        let user;

        if(email){
           user = await Auth.findOne(email);
        }else{
            user = await Auth.findOne(phone)
        }

        if(!user){
            return res.status(404).json({success:false, message:"User not found"})
        }

        if(user.isVerified){
            return res.status(400).json({success:false, message:"User alredy verified"});
        }
        
        const otp =Math.floor(
            100000 + Math.random * 900000
        ).toString();

        const toExpires = new Date(
            Date.now() + 5 *60* 1000
        )
        user.otp = otp;
        user.otpExpires = toExpires;

        await user.save();

        if(user.verifyMethod === email){
            await sendEmail(user.email, otp)
        }else if(user.verifyMethod === phone){
            await sendPhoneOTP(user.phone, otp)
        }

        return res.status(200).json({success:true, message:`OTP resend successfully ${user.verifyMethod}`})

    }catch(err){
        console.log(err.message)
    }
}

export const login = async (req, res) =>{
    try{
        const {email, phone, password} = req.body;

        if(!email && !phone){
        return res.status(404).json({success:false, message:"User Maile or Phone is required"});

        }

        if(!password){
            return res.status(404).json({success:false, message:"Password is required"});
        }

        let user;

        if(email){
            user = await Auth.findOne({email});
        }else{
            user = await Auth.findOne({phone});
        }

        if(!user){
            return res.status(401).json({success:false, message:"User not Found"});
        }

        if(!user.isVerified){
            return res.status(400).json({success:false, message:"Plece verify your account First"})
        }

        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        );

        if(!isPasswordCorrect){
            return res.status(401).json({success:false, message:"invalid password"})
        }


        return res.status(200).json({success:true, message:"User logged in successfully", user:{
            id: user._id,
            fullName:user.fullName,
            email: user.email,
            phone: user.phone,
        }})

    }catch(err){
        console.log(err.message)
    }
}