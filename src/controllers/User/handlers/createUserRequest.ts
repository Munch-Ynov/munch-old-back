import { NextFunction, Request, Response, RequestHandler } from "express";
import { getUserByEmailModel,createUserModel } from "../../../models/User";
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export const createUser: RequestHandler = async (req: Request, res: Response, next: NextFunction) => { 
    if (!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.password) {
        return res.status(400).json({ message: 'firstName, lastName, email and password are required' });
    }else if(await getUserByEmailModel(req.body.email)){
        return res.status(400).json({ message: 'Email already exists' });
    }
    try {
        const hash = await bcrypt.hash(req.body.password, SALT_ROUNDS);
        const newUser = {...req.body, password: hash};
        const creationUser = await createUserModel(newUser);
        res.status(201).json(creationUser);
    } catch (err) {
        return res.status(400).json({ message: 'User not created' });
    }


}