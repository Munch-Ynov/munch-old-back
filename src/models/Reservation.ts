import { PrismaClient, Reservation, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

export const getAllReservationsModel = async () => {
    return await prisma.reservation.findMany({
    })
}

export const getReservationByIdModel = async (id: number) => {
    return await prisma.reservation.findUnique({
        where: {
            id: id
        }
    })
}

export const createReservationModel = async (Reservation: Prisma.ReservationCreateInput) => {
    return await prisma.reservation.create({
        data: Reservation
    })
}

export const updateReservationModel = async (id: number, Reservation: Prisma.ReservationUpdateInput)=> {
    return await prisma.reservation.update({
        where: {
            id: id
        },
        data: Reservation
    })
}

export const deleteReservationModel = async (id: number) => {
    return await prisma.reservation.delete({
        where: {
            id: id
        }
    })
}

