import { NextFunction, Request, Response, RequestHandler } from "express";
import { getUserByIdService } from "../../../services/User";
import jwt from 'jsonwebtoken';

export const getMe: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    // const token = req.cookies.token;
    if(req.headers && req.headers.authorization ){
        const token = req.headers.authorization?.split(' ')[1];
        
        if (!token) {
            return res.status(401).send('Accès refusé. Aucun token fourni.');
          }
        try{
            const decodedToken = jwt.verify(token, `${process.env.JWT_SECRET}`) as { id: number }
            const userId = decodedToken.id;
            const user = await getUserByIdService(userId);
        
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            } else {
                return res.status(200).json({...user, password: undefined});
            }
        }catch(err){
            return res.status(401).send('Accès refusé. Token invalide.');
        }
    }else{
        return res.status(401).send('Accès refusé. Aucun token fourni.');
    }
}