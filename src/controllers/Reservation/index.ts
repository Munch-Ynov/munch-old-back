import { createReservation } from "./handlers/createReservationRequest";
import { deleteReservation } from "./handlers/deleteReservationRequest";
import { getAllReservations } from "./handlers/getAllReservationsRequest";
import { getReservationById } from "./handlers/getReservationByIdRequest";
import { getReservationByUserId } from "./handlers/getReservationByUserIdRequest";
import { updateReservation } from "./handlers/updateReservationRequest";

export default {
  getAllReservations,
  createReservation,
  getReservationById,
  updateReservation,
  deleteReservation,
  getReservationByUserId,
};
