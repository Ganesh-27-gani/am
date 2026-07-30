import twilio from "twilio";


// console.log("SID:", process.env.TWILIO_ACCOUNT_SID);
// console.log("TOKEN:", process.env.TWILIO_AUTH_TOKEN);
// console.log("PHONE:", process.env.TWILIO_PHONE_NUMBER);

const client = twilio(

    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN

);

const sendPhoneOTP = async (phone, otp)=>{

try{
    await client.messages.create({
        body: `Your AM ENTERPRISES OTP is ${otp}`,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: `+91${phone}`
    })

    console.log("Check Your WhatsAPP");
    
}catch(err){
    console.log(err)
};

}
export default sendPhoneOTP;