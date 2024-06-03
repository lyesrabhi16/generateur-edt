import jwt from 'jsonwebtoken';

export const cookieJwtAuthentication = (req, res, next) => {
    const token = req.cookies.token;
    console.log(token);
    
    try {
        /* @MassinS
            !modified 
                * extracted only email and id from the token
            ?--written by @lyesrabhi16
         */
        console.log(jwt.verify(token, process.env.JWTSecret));
        const { id, email } = jwt.verify(token, process.env.JWTSecret);
        req.email = email;
        req.matricule = id;
        // Autoriser les credentials
        res.set('Access-Control-Allow-Credentials', 'true');
        next();
    } catch {
        res.clearCookie('token');
        return res.redirect('/login');
    }
};
