
import Contact from "../models/contactmodel.js";



export const createContact = async (req, res) => {

    try {

        const {
            fullName,
            email,
            phone,
            subject,
            message
        } = req.body;

        if (
            !fullName ||
            !email ||
            !phone ||
            !subject ||
            !message
        ) {

            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });

        }

        const contact = await Contact.create({
            fullName,
            email,
            phone,
            subject,
            message

        });

        res.status(201).json({
            success: true,
            message: "Message Sent Successfully",
            data: contact

        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message

        });

    }

};
