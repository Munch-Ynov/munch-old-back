import { NextFunction, Request, Response, RequestHandler } from "express";
import { getAllReservationsModel } from "../../../models/Reservation";

export const getAllReservations: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const Reservations = await getAllReservationsModel();
        if(!Reservations){
            return res.status(404).json({ message: 'Reservations not found' });
        }
        return res.status(200).json(Reservations)
    }catch (err){
        next(err)
    }
}