import twilio from "twilio";


const sendPhoneOTP = async (phone, otp) => {

    console.log("SID:", process.env.TWILIO_ACCOUNT_SID);
    console.log("TOKEN:", process.env.TWILIO_AUTH_TOKEN);
    console.log("PHONE:", process.env.TWILIO_PHONE_NUMBER);
 
    const client = twilio(
        process.env.TWILIO_ACCOUNT_SID,
        process.env.TWILIO_AUTH_TOKEN,

    );


    try {
        const message = await client.messages.create({

            from: `whatsapp:${process.env.TWILIO_PHONE_NUMBER}`,
            to: `whatsapp:+91${phone}`,
            body: `Your AM ENTERPRISES OTP is ${otp}`,
        })
        console.log("Message SID:", message.sid);

        console.log("Check Your WhatsAPP");

    } catch (err) {
        console.log(err)
    };

}
export default sendPhoneOTP;