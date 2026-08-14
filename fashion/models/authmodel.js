import bcrypt from "bcryptjs";
import mongoose from "mongoose";

  const authSchema = new mongoose.Schema({

    fullName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: [/^[6-9]\d{9}$/, "Plese enter a valid 10-digit phone number"],
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    verifyMethod: {
        type: String,
        enum: ["email", "phone"],
        default: "email",
    },

    otp: String,
    otpExpires: Date,

    isVerified: {
        type: Boolean,
        default: false,
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },

},
    {
        timestamps: true,
    },

);

authSchema.pre("save", async function() {
    
    if(!this.isModified("password")){
        return;
    }

    const salt = await bcrypt.genSalt(10);

    this.password = await bcrypt.hash(
        this.password,
        salt
    );
})

 const Auth = mongoose.model("auth", authSchema);

 export default Auth; 