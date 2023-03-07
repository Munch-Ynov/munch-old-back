import { NextFunction, Request, Response, RequestHandler } from "express";
import { getAllRestaurantsModel } from "../../../models/Restaurant";

export const getAllRestaurants: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const restaurants = await getAllRestaurantsModel();
        if(!restaurants){
            return res.status(404).json({ message: 'Restaurants not found' });
        }
        return res.status(200).json(restaurants)
    }catch (err){
        next(err)
    }
}