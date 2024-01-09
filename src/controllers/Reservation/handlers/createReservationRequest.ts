import { NextFunction, Request, Response, RequestHandler } from "express";
import { createReservationService } from "../../../services/Reservation";
import { getUserByIdService } from "../../../services/User";

export const createReservation: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.body.user_id || !req.body.restaurant_id || !req.body.nb_people || !req.body.date || !req.body.status) {
        return res.status(400).json({ message: 'user_id, restaurant_id, nb_people, date and status are required' });
    } 

    const user = await getUserByIdService(req.body.user_id);
    if(!user){
        return res.status(404).json({ message: 'User not found' });
    }
    try {
        const Reservation = await createReservationService(req.body);
        if(!Reservation){
            return res.status(404).json({ message: 'Reservation not found' });
        }
        return res.status(201).json(Reservation)
    }catch (err){
        next(err)
    }
}