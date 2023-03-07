/*
  Warnings:

  - Added the required column `nb_people` to the `Reservation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Reservation` ADD COLUMN `nb_people` INTEGER NOT NULL,
    ADD COLUMN `status` ENUM('PENDING', 'ACCEPTED', 'REFUSED') NOT NULL DEFAULT 'PENDING';
