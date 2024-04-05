import jwt from 'jsonwebtoken';

export const cookieJwtAuthentication = (req, res, next) => {
    const token = req.cookies.token;
    console.log(token);
    
    try {
        const email = jwt.verify(token, process.env.JWTSecret);
        req.email = email;
        next();
    } catch {
        res.clearCookie('token');
        return res.redirect('/login');
    }
};
