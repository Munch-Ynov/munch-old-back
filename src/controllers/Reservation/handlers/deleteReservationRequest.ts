import { NextFunction, Request, Response, RequestHandler } from "express";
import { deleteReservationService } from "../../../services/Reservation";

export const deleteReservation: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if(!req.params.id){
            return res.status(400).json({ message: 'id is required' });
        }
        const Reservation = await deleteReservationService(req.params.id);
        if(!Reservation){
            return res.status(404).json({ message: 'Reservation not found' });
        }
        return res.status(200).json(Reservation)
    }catch (err){
        next(err)
    }
}