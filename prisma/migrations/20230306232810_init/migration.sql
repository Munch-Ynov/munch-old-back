/*
  Warnings:

  - You are about to drop the column `restaurant_id` on the `Favorites` table. All the data in the column will be lost.
  - Added the required column `restaurantId` to the `Favorites` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Favorites` DROP FOREIGN KEY `Favorites_restaurant_id_fkey`;

-- AlterTable
ALTER TABLE `Favorites` DROP COLUMN `restaurant_id`,
    ADD COLUMN `restaurantId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Favorites` ADD CONSTRAINT `Favorites_restaurantId_fkey` FOREIGN KEY (`restaurantId`) REFERENCES `Restaurants`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
