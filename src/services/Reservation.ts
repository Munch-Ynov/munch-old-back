import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllReservationsService = async () => {
  return await prisma.reservation.findMany();
};

export const getReservationByIdService = async (id: string) => {
  return await prisma.reservation.findUnique({
    where: {
      id: id,
    },
  });
};

export const getReservationByUserIdService = async (userId: string) => {
  return await prisma.reservation.findMany({
    where: {
      userId: userId,
    },
    include: {
      restaurant: true,
    },
  });
};

export const createReservationService = async (
  Reservation: Prisma.ReservationCreateInput
) => {
  return await prisma.reservation.create({
    data: Reservation,
  });
};

export const updateReservationService = async (
  id: string,
  Reservation: Prisma.ReservationUpdateInput
) => {
  return await prisma.reservation.update({
    where: {
      id: id,
    },
    data: Reservation,
  });
};

export const deleteReservationService = async (id: string) => {
  return await prisma.reservation.delete({
    where: {
      id: id,
    },
  });
};
