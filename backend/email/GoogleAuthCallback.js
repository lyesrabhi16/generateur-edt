import { sendEmail } from "./sendEmail.js";
import { google } from "googleapis";
import { decode } from "jsonwebtoken";
export const GoogleAuthCallback = (req, res) => {
  const { state, code } = req.query;
  const params = JSON.parse(state);
  const redirect_url = "http://localhost:3000/email/auth/google/callback";
  const oAuth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    redirect_url
  );
  console.log("google callback with code: ", code);
  console.log("getting access token...");
  oAuth2Client.getToken(code, (err, token) => {
    if (err) {
      console.error("Error retrieving access token", err);
      return res.status(500).json({
        status: "Error",
        message: "Erreur pendant la récupération du token de gmail/google",
        erreur: err,
      });
    }
    console.log("retreived access token: ", token);
    oAuth2Client.setCredentials(token);

    // Extract the desired user email from token
    const decoded_id = decode(token.id_token);
    console.log(decoded_id);
    req.body.user_email = decoded_id.email;
    req.body.access_token = token.access_token;
    req.body.refresh_token = token.refresh_token;
    req.body.expires = token.expiry_date
    req.body.id_emp = params.id_emp;
    // send email
    sendEmail(req, res);
  });
};
