import { PrismaClient, User, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllUsersService = async () => {
  return await prisma.user.findMany({});
};

export const getUserByIdService = async (id: number) => {
  return await prisma.user.findUnique({
    where: {
      id: id,
    },
    include: {
      reservations: true,
      // reviews: true,
    },
  });
};

export const getUserByEmailService = async (email: string) => {
  return await prisma.user.findUnique({
    where: {
      email: email,
    },
    include: {
      reservations: true,
      // reviews: true,
    },
  });
};

export const createUserService = async (user: Prisma.UserCreateInput) => {
  return await prisma.user.create({
    data: user,
  });
};

export const updateUserService = async (
  id: number,
  user: Prisma.UserUpdateInput
) => {
  return await prisma.user.update({
    where: {
      id: id,
    },
    data: user,
  });
};

export const deleteUserService = async (id: number): Promise<User | null> => {
  return await prisma.user.delete({
    where: {
      id: id,
    },
  });
};
