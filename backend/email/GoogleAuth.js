import { google } from "googleapis";

export const googleAuth = (req, res) => {

  const {id_emp} = req.body;

  const oAuth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI_SEND_EMAIL
  );
  // generate a url that asks permissions for gmail send email scope
  const scopes = [
    "https://www.googleapis.com/auth/gmail.send",
    "https://www.googleapis.com/auth/gmail.metadata",
    "https://www.googleapis.com/auth/userinfo.email",
    "https://mail.google.com/"
  ];
  console.log("generating AuthUrl");
  const url = oAuth2Client.generateAuthUrl({
    // 'online' (default) or 'offline' (gets refresh_token)
    access_type: "offline",

    // If you only need one scope you can pass it as a string
    scope: scopes,
    state: JSON.stringify({id_emp: id_emp})

  });
  console.log("redirecting to : ", url);
  res.redirect(url);
};
