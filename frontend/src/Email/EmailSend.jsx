import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
export const EmailSend = () => {
  const getParams = () => {
    // Parse query string to see if page request is coming from OAuth 2.0 server.
    const fragmentString = location.hash.substring(1);
    const params = {};
    let regex = /([^&=]+)=([^&]*)/g,
      m;
    while ((m = regex.exec(fragmentString))) {
      params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }
    return params;
  };

  // check if its coming from google OAuth2 server
  let params = getParams();

  useEffect(() => {
    console.log(params);
  }, [params]);

  const GOOGLE_CLIENT_ID =
    "148373478842-lab6hq5l2piurkludiu36158p6tm0mah.apps.googleusercontent.com";
  const GOOGLE_REDIRECT_URI = "http://localhost:5000/email/send/callback";

  const sendEmail = () => {
    const t = toast.loading("Sending Emails...");
    axios
      .get("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: {
          Authorization: `Bearer ${params.access_token}`,
        },
      })
      .then((res) => {
        axios
          .post(
            "http://localhost:3000/email/send",
            {
              id_emp: 66,
              user_email: res.data.email,
              access_token: params.access_token,
            },
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log(res);
            toast.success("Emails sent successfully", { id: t });
          })
          .catch((err) => {
            toast.error("Error sending emails", { id: t });
            console.log(err);
          });
      })
      .catch((err) => {
        toast.error("Error getting user email", { id: t });
        console.log(err);
      });
  };

  // Function to generate a random state value
  const generateCryptoRandomState = () => {
    const randomValues = new Uint32Array(2);
    window.crypto.getRandomValues(randomValues);

    // Encode as UTF-8
    const utf8Encoder = new TextEncoder();
    const utf8Array = utf8Encoder.encode(
      String.fromCharCode.apply(null, randomValues)
    );

    // Base64 encode the UTF-8 data
    return btoa(String.fromCharCode.apply(null, utf8Array))
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");
  };
  /*
   * Create form to request access token from Google's OAuth 2.0 server.
   */
  const oauth2SignIn = () => {
    // create random state value and store in local storage
    const state = generateCryptoRandomState();
    localStorage.setItem("state", state);

    // Google's OAuth 2.0 endpoint for requesting an access token
    const oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";

    // Create element to open OAuth 2.0 endpoint in new window.
    const form = document.createElement("form");
    form.setAttribute("method", "GET"); // Send as a GET request.
    form.setAttribute("action", oauth2Endpoint);

    // Parameters to pass to OAuth 2.0 endpoint.
    const params = {
      client_id: GOOGLE_CLIENT_ID,
      redirect_uri: GOOGLE_REDIRECT_URI,
      scope:
        "https://www.googleapis.com/auth/gmail.send https://www.googleapis.com/auth/gmail.metadata https://www.googleapis.com/auth/userinfo.email https://mail.google.com/",
      state: state,
      include_granted_scopes: "true",
      response_type: "token",
    };

    // Add form parameters as hidden input values.
    for (let p in params) {
      const input = document.createElement("input");
      input.setAttribute("type", "hidden");
      input.setAttribute("name", p);
      input.setAttribute("value", params[p]);
      form.appendChild(input);
    }

    // Add form to page and submit it to open the OAuth 2.0 endpoint.
    document.body.appendChild(form);
    form.submit();
  };

  const trySend = () => {
    if (params.access_token !== undefined) {
      sendEmail();
    } else {
      oauth2SignIn();
    }
  };

  return (
    <>
      <div>EmailSend</div>
      <button className="btn bg-primary hover:bg-accent text-white" onClick={trySend}>
        {params.access_token ? "Send" : "Login"}
      </button>
    </>
  );
};
