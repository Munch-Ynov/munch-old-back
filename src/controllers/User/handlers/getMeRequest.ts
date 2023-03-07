import { NextFunction, Request, Response, RequestHandler } from "express";
import { getUserByIdModel } from "../../../models/User";
import jwt from 'jsonwebtoken';

export const getMe: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).send('Accès refusé. Aucun token fourni.');
      }
    const decodedToken = jwt.verify(token, `${process.env.JWT_SECRET}`) as { id: number };
    const userId = decodedToken.id;
    const user = await getUserByIdModel(userId);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    } else {
        return res.status(200).json(user);
    }
}