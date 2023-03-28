-- DropForeignKey
ALTER TABLE `Restaurants` DROP FOREIGN KEY `Restaurants_userId_fkey`;

-- AlterTable
ALTER TABLE `Restaurants` MODIFY `userId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Restaurants` ADD CONSTRAINT `Restaurants_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
