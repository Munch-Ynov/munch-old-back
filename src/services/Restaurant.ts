import { PrismaClient, Restaurants, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

export const getAllRestaurantsService = async () => {
    return await prisma.restaurants.findMany({
    })
}

export const getRestaurantByIdService = async (id: number) => {
    return await prisma.restaurants.findUnique({
        where: {
            id: id
        }
    })
}

export const createRestaurantService = async (restaurant: Prisma.RestaurantsCreateInput): Promise<Restaurants> => {
    return await prisma.restaurants.create({
        data: restaurant
    })
}

export const updateRestaurantService = async (id: number, restaurant: Prisma.RestaurantsUpdateInput): Promise<Restaurants | null> => {
    return await prisma.restaurants.update({
        where: {
            id: id
        },
        data: restaurant
    })
}

export const deleteRestaurantService = async (id: number) => {
    return await prisma.restaurants.delete({
        where: {
            id: id
        }
    })
}

