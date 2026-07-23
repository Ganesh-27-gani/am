import Auth from "../models/authmodel.js";
import jwt from "jsonwebtoken";

export const verifyOTP = async (req, res) => {
    try {

        const { email, phone, otp } = req.body;

        const user = await Auth.findOne({
            $or: [
                { email },
                { phone },
            ]
        });

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        if (user.otp !== otp) {
            return res.status(400).json({ success: false, message: "Invalid OTP" });
        }

        if (user.otpExpires < new Date()) {
            return res.status(400).json({ success: false, message: "OTP Expired" });
        }


        user.isVerified = true;
        user.otp = null;
        user.otpExpires = null;

        await user.save();

        const token = jwt.sign(

            {id : user._id },
            process.env.JWT_SECRET,

            {
                expiresIn : "7d"
            }
        );

        req.status(200).json({success : true, message : "Verification successful", token})
       

    } catch (err) {

        console.log(err)
    }
}

