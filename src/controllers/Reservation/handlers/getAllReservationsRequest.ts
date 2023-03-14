import { NextFunction, Request, Response, RequestHandler } from "express";
import { getAllReservationsService } from "../../../services/Reservation";

export const getAllReservations: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const Reservations = await getAllReservationsService();
        if(!Reservations){
            return res.status(404).json({ message: 'Reservations not found' });
        }
        return res.status(200).json(Reservations)
    }catch (err){
        next(err)
    }
}