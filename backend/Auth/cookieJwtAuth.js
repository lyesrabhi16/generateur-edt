import jwt from 'jsonwebtoken';

export const cookieJwtAuthentication = (req, res, next) => {
    const token = req.cookies.token;
    
    try {
        /* @MassinS
            !modified 
                * extracted only email and id from the token
            ?--written by @lyesrabhi16
         */

        const { id, email } = jwt.verify(token, process.env.JWTSecret);
        req.email = email;
        req.matricule = id;
        // Autoriser les credentials
        res.set('Access-Control-Allow-Credentials', 'true');
        console.log(`auth success: ${id} ${email}`);
        next();
    } catch {
        res.clearCookie('token');
        console.log(`auth failed with token: `, token);
        return res.redirect('/login');
    }
};
