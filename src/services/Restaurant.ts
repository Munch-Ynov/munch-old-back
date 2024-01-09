import { PrismaClient, Restaurant, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

export const getAllRestaurantsService = async () => {
    return await prisma.restaurant.findMany({
    })
}

export const getRestaurantByIdService = async (id: string) => {
    return await prisma.restaurant.findUnique({
        where: {
            id: id
        }
    })
}

export const createRestaurantService = async (restaurant: Prisma.RestaurantCreateInput): Promise<Restaurant> => {
    return await prisma.restaurant.create({
        data: restaurant
    })
}

export const updateRestaurantService = async (id: string, restaurant: Prisma.RestaurantUpdateInput): Promise<Restaurant | null> => {
    return await prisma.restaurant.update({
        where: {
            id: id
        },
        data: restaurant
    })
}

export const deleteRestaurantService = async (id: string) => {
    return await prisma.restaurant.delete({
        where: {
            id: id
        }
    })
}

