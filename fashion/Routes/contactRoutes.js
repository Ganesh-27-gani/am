import express from "express";
import { createContact } from "../controlars/contactcontrol.js";


const router = express.Router();

router.post("/contact", createContact);

export default router