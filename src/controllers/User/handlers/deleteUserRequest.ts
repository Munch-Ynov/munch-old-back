import { NextFunction, Request, Response, RequestHandler } from "express";
import { deleteUserModel } from "../../../models/User";

export const deleteUser: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if(!req.params.id){
            return res.status(400).json({ message: 'id is required' });
        }
        const user = await deleteUserModel(+req.params.id);
        if(!user){
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json(user)
    }catch (err){
        next(err)
    }
}