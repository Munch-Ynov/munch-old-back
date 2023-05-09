import express from "express";
import { authMiddleware } from "../middlewares/auth-middleware";
import Reservation from "../controllers/Reservation";

export const ReservationRouter = express.Router();

ReservationRouter.get("/", Reservation.getAllReservations);
ReservationRouter.get("/:id", Reservation.getReservationById);
ReservationRouter.get("/user/:userId", Reservation.getReservationByUserId);
ReservationRouter.post("/", authMiddleware, Reservation.createReservation);
ReservationRouter.put("/:id", authMiddleware, Reservation.updateReservation);
ReservationRouter.delete("/:id", authMiddleware, Reservation.deleteReservation);
