import { RequestHandler } from "express";
import { getAllUsersService } from "../../../services/User";

export const getAllUsers: RequestHandler = async (req, res, next) => {
    try {
        const allUsers = await getAllUsersService();
        if(!allUsers) throw new Error('No users found');

        res.json(allUsers)
    }catch (err){
        next(err)
    }
}


