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

        const { id, email } = jwt.verify(token, process.env.JWTSecret);
        
        req.email = email;
        req.matricule = id;

        next();
    } catch {
        res.clearCookie('token');
        return res.redirect('/login');
    }
};
