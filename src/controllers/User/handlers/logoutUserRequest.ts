import { NextFunction, Request, Response, RequestHandler } from "express";

export const logoutUser: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    if(!req.cookies.token) return res.status(401).json({ message: 'User not logged in' });
    res.clearCookie('token');
    return res.status(200).json({ message: 'User logged out' });
}