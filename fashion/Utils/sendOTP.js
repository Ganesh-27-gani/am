import nodemailer from "nodemailer"

 const transpoter  = nodemailer.createTransport({
    service: "gmail",

    auth:{ 
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,

    }
});

const sendEmail = async (email, otp)=>{

    try{
      await transpoter.sendMail({
        from: process.env.EMAIL_USER,

        to: email,

        subject: "AM ENTERPRISES OTP Verification",
        
        html: `
        <dev style="font-family:Arial; padding:20px" >

        <h2> AM Fashion</h2>

        <p>Your OTP is</p>

        <h1 style="color:red">${otp}</h1>

        <p> This OTP expires in 5 minutes.</p>
        
        </dev>`

      })
      console.log("Email Sent")

    }catch(err){
        console.log(err)
    }

}
export default sendEmail;
