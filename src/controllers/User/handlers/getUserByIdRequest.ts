import { NextFunction, Request, Response, RequestHandler } from "express";
import { getUserByIdService } from "../../../services/User";

export const getUserById: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if(!req.params.id){
            return res.status(400).json({ message: 'id is required' });
        }
        const user = await getUserByIdService(req.params.id);
        if(!user){
            return res.status(400).json({ message: 'User not found' });
        }

        return res.json(user)
    }catch (err){
        next(err)
    }
}