import { PrismaClient, Restaurants, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

export const getAllRestaurantsModel = async () => {
    return await prisma.restaurants.findMany({
    })
}

export const getRestaurantByIdModel = async (id: number) => {
    return await prisma.restaurants.findUnique({
        where: {
            id: id
        }
    })
}

export const createRestaurantModel = async (restaurant: Prisma.RestaurantsCreateInput): Promise<Restaurants> => {
    return await prisma.restaurants.create({
        data: restaurant
    })
}

export const updateRestaurantModel = async (id: number, restaurant: Prisma.RestaurantsUpdateInput): Promise<Restaurants | null> => {
    return await prisma.restaurants.update({
        where: {
            id: id
        },
        data: restaurant
    })
}

export const deleteRestaurantModel = async (id: number) => {
    return await prisma.restaurants.delete({
        where: {
            id: id
        }
    })
}

