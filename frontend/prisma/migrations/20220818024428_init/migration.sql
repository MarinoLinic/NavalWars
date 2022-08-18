/*
  Warnings:

  - Made the column `userId` on table `character` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `character` DROP FOREIGN KEY `Character_userId_fkey`;

-- AlterTable
ALTER TABLE `character` MODIFY `userId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Character` ADD CONSTRAINT `Character_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
