import { RequestHandler } from "express";
import { getAllUsersModel } from "../../../models/User";

export const getAllUsers: RequestHandler = async (req, res, next) => {
    try {
        const allUsers = await getAllUsersModel();
        if(!allUsers) throw new Error('No users found');

        res.json(allUsers)
    }catch (err){
        next(err)
    }
}


