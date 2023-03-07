/*
  Warnings:

  - You are about to drop the column `user_id` on the `Favorites` table. All the data in the column will be lost.
  - You are about to drop the column `restaurant_id` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Restaurants` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Restaurants` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Favorites` table without a default value. This is not possible if the table is not empty.
  - Added the required column `restaurantId` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Restaurants` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Favorites` DROP FOREIGN KEY `Favorites_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `Reservation` DROP FOREIGN KEY `Reservation_restaurant_id_fkey`;

-- DropForeignKey
ALTER TABLE `Reservation` DROP FOREIGN KEY `Reservation_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `Restaurants` DROP FOREIGN KEY `Restaurants_user_id_fkey`;

-- AlterTable
ALTER TABLE `Favorites` DROP COLUMN `user_id`,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Reservation` DROP COLUMN `restaurant_id`,
    DROP COLUMN `user_id`,
    ADD COLUMN `restaurantId` INTEGER NOT NULL,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Restaurants` DROP COLUMN `user_id`,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Restaurants_userId_key` ON `Restaurants`(`userId`);

-- AddForeignKey
ALTER TABLE `Restaurants` ADD CONSTRAINT `Restaurants_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Favorites` ADD CONSTRAINT `Favorites_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reservation` ADD CONSTRAINT `Reservation_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reservation` ADD CONSTRAINT `Reservation_restaurantId_fkey` FOREIGN KEY (`restaurantId`) REFERENCES `Restaurants`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
