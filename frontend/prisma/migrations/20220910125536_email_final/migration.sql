/*
  Warnings:

  - You are about to drop the column `userId` on the `character` table. All the data in the column will be lost.
  - Added the required column `userEmail` to the `Character` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `character` DROP FOREIGN KEY `Character_userId_fkey`;

-- AlterTable
ALTER TABLE `character` DROP COLUMN `userId`,
    ADD COLUMN `userEmail` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Character` ADD CONSTRAINT `Character_userEmail_fkey` FOREIGN KEY (`userEmail`) REFERENCES `User`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;
