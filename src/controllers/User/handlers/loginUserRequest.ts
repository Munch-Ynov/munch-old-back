import { NextFunction, Request, Response, RequestHandler } from "express";
import { getUserByEmailService, getUserByIdService } from "../../../services/User";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const loginUser: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if(!req.body.email || !req.body.password){
            return res.status(400).json({ message: 'email and password are required' });
        }
        const user = await getUserByEmailService(req.body.email);
        if(!user){
            return res.status(404).json({ message: 'User not found' });
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if(!validPassword){
            return res.status(400).json({ message: 'Invalid password' });
        }

        const token = jwt.sign({id: user.id}, `${process.env.JWT_SECRET}`, {expiresIn: '1h'});
        // res.cookie('token', token, {httpOnly: true});
        //add token to response header
        const userWithoutPassword = {user:{...user, password: undefined}, accessToken: token};
        return res.status(200).json(userWithoutPassword);

    }catch (err){
        next(err)
    }
}