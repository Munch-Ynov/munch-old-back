import { NextFunction, Request, Response, RequestHandler } from "express";
import { updateUserService } from "../../../services/User";

export const updateUser: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if(!req.params.id){
            return res.status(400).json({ message: 'id is required' });
        }
        const user = await updateUserService(req.params.id, req.body);
        if(!user){
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json({...user, password: undefined})
    }catch (err){
        next(err)
    }
}

