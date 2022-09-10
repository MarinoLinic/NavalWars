-- DropForeignKey
ALTER TABLE `character` DROP FOREIGN KEY `Character_userId_fkey`;

-- AddForeignKey
ALTER TABLE `Character` ADD CONSTRAINT `Character_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;
