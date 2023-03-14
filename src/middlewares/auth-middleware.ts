import {Response, Request, NextFunction} from 'express';
import jwt from 'jsonwebtoken';


export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        //const token = req.cookies.token;
        // if(req.headers && req.headers.authorization && req.headers.authorization.split(' ')[1] == 'Bearer'){
        const token = req.headers.authorization?.split(' ')[1];

        if(!token){
            return res.status(401).send('Access refusé. Aucun token fourni.')
        }


        const decodedToken = jwt.verify(token, `${process.env.JWT_SECRET}`);
        const userId = decodedToken;
        if (!userId) {
            throw 'Invalid user ID';
        } else {
            next();
        }
    } catch (err){
        res.status(401).json({message: "Invalid request, token is missing !"});
    }
}