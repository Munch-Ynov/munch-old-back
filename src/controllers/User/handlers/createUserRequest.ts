import { NextFunction, Request, Response, RequestHandler } from "express";
import { getUserByEmailService,createUserService } from "../../../services/User";
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export const createUser: RequestHandler = async (req: Request, res: Response, next: NextFunction) => { 
    if (!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.password) {
        return res.status(400).json({ message: 'firstName, lastName, email and password are required' });
    }else if(await getUserByEmailService(req.body.email)){
        return res.status(400).json({ message: 'Email already exists' });
    }
    try {
        const hash = await bcrypt.hash(req.body.password, SALT_ROUNDS);
        const newUser = {...req.body, password: hash};
        const creationUser = await createUserService(newUser);
        res.status(201).json(creationUser);
    } catch (err) {
        return res.status(400).json({ message: 'User not created' });
    }


}