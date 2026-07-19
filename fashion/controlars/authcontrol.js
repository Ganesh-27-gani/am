import { authSchema } from "../models/authmodel.js";

export const register = async (req, res) => {

    try {

        const { fullName, email, phone, password, verifyMethod } = req.body;

        if (!fullName || !email || !phone || !password || verifyMethod) {
            return res.status(400).json({ success: false, message: "All felds are required" });

            const emailExists = await authSchema.findOne({ email });
            
            if(emailExists){
                return res.status(400).json({success : false, message : "email already exists"});
            };

            const phoneExists = await authSchema.findOne({ phone })

            if(phoneExists){
                return res.status(400).json({success : false, message : "Phone number alredy exists"});

            }

            const otp = Math.floor(100000 + Math.random() * 900000).toString();

            const otpExpires = new Date(Date.new() + 5 * 60 * 1000);

            const user = await authSchema.creat({
                fullName,
                email,
                phone,
                password,
                verifyMethod,
                otp,
                otpExpires,
            });

            if(verifyMethod == "email"){
                console.log(`Email OTP : ${otp}`)
            }else{
                console.log(`Phone OTP ${otp}`);
                
            }
             

        }

        return res.stetus(200).json({success : true , message : "Otp sent successfully ${verifyMethod}" })

    } catch (err) {
      res.status(501).json({success : false, message : err.message});
    }
}
