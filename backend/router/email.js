import {Router } from "express";
import { sendEmail } from "../email/sendEmail.js";
import { googleAuth } from "../email/GoogleAuth.js";
import { GoogleAuthCallback } from "../email/GoogleAuthCallback.js";


const emailRouter = Router();


emailRouter.post("/send", googleAuth);
emailRouter.get("/auth/google/callback", GoogleAuthCallback);

export default emailRouter;