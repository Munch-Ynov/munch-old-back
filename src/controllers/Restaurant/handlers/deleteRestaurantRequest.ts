import { NextFunction, Request, Response, RequestHandler } from "express";
import { deleteRestaurantService } from "../../../services/Restaurant";

export const deleteRestaurant: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if(!req.params.id){
            return res.status(400).json({ message: 'id is required' });
        }
        const restaurant = await deleteRestaurantService(req.params.id);
        if(!restaurant){
            return res.status(404).json({ message: 'Restaurant not found' });
        }
        return res.status(200).json(restaurant)
    }catch (err){
        next(err)
    }
}