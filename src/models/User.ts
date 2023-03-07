import { PrismaClient, User, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

export const getAllUsersModel = async () => {
    return await prisma.user.findMany({
    })
}

export const getUserByIdModel = async (id: number) => {
    return await prisma.user.findUnique({
        where: {
            id: id
        }
    })
}

export const getUserByEmailModel = async (email: string) => {
    return await prisma.user.findUnique({
        where: {
            email: email
        }
    })
}

export const createUserModel = async (user: Prisma.UserCreateInput) => {
    return await prisma.user.create({
        data: user
    })
}

export const updateUserModel = async (id: number, user: Prisma.UserUpdateInput)=> {
    return await prisma.user.update({
        where: {
            id: id
        },
        data: user
    })
}

export const deleteUserModel = async (id: number): Promise<User | null> => {
    return await prisma.user.delete({
        where: {
            id: id
        }
    })
}


