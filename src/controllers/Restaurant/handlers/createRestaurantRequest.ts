import { NextFunction, Request, Response, RequestHandler } from "express";
import { createRestaurantModel } from "../../../models/Restaurant";
import { getUserByIdModel } from "../../../models/User";

export const createRestaurant: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    const user = await getUserByIdModel(+req.body.id);
    if(!user){
        return res.status(404).json({ message: 'User not found' });
    }
    try {
        const restaurant = await createRestaurantModel(req.body);
        if(!restaurant){
            return res.status(404).json({ message: 'Restaurant not found' });
        }
        return res.status(201).json(restaurant)
    }catch (err){
        next(err)
    }
}