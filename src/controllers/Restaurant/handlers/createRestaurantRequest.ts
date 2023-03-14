import { NextFunction, Request, Response, RequestHandler } from "express";
import { createRestaurantService } from "../../../services/Restaurant";
import { getUserByIdService } from "../../../services/User";

export const createRestaurant: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    // const user = await getUserByIdModel(+req.body.userId);
    // if(!user){
    //     return res.status(404).json({ message: 'User not found' });
    // }
    try {
        console.log(req.body);
        
        const restaurant = await createRestaurantService(req.body);
        if(!restaurant){
            return res.status(404).json({ message: 'Restaurant not found' });
        }
        return res.status(201).json(restaurant)
    }catch (err){
        console.log(err);
        
        // next(err)
    }
}