import { NextFunction, Request, Response, RequestHandler } from "express";
import { getReservationByUserIdService } from "../../../services/Reservation";

export const getReservationByUserId: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.params.userId) {
      return res.status(400).json({ message: "userId is required" });
    }
    const Reservations = await getReservationByUserIdService(
      req.params.userId
    );
    if (!Reservations) {
      return res.status(404).json({ message: "Reservations not found" });
    }
    return res.status(200).json(Reservations);
  } catch (err) {
    next(err);
  }
};
