-- CreateTable
CREATE TABLE `Character` (
    `id` INTEGER NOT NULL,
    `userId` INTEGER NULL,
    `name` VARCHAR(50) NOT NULL,
    `avatar` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `Character_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Character` ADD CONSTRAINT `Character_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
