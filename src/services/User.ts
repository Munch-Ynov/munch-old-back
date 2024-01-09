import { Prisma, User, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllUsersService = async () => {
  return await prisma.user.findMany({});
};

export const getUserByIdService = async (id: string) => {
  return await prisma.user.findUnique({
    where: {
      id: id,
    },
    include: {
      reservation: true,
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
      reservation: true,
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
  id: string,
  user: Prisma.UserUpdateInput
) => {
  return await prisma.user.update({
    where: {
      id: id,
    },
    data: user,
  });
};

export const deleteUserService = async (id: string): Promise<User | null> => {
  return await prisma.user.delete({
    where: {
      id: id,
    },
  });
};
