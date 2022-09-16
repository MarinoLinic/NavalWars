-- DropForeignKey
ALTER TABLE `character` DROP FOREIGN KEY `Character_userEmail_fkey`;

-- AlterTable
ALTER TABLE `character` MODIFY `userEmail` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Buildings` (
    `characterID` INTEGER NOT NULL,
    `building0` INTEGER NOT NULL,

    PRIMARY KEY (`characterID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ShipGroup` (
    `id` INTEGER NOT NULL,
    `characterID` INTEGER NOT NULL,
    `ship0` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tasks_Construction` (
    `id` INTEGER NOT NULL,
    `completed` DATETIME(3) NOT NULL,
    `characterID` INTEGER NOT NULL,
    `buildingtype` ENUM('Ship', 'Building') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tasks_Naval` (
    `id` INTEGER NOT NULL,
    `completed` DATETIME(3) NOT NULL,
    `characterID` INTEGER NOT NULL,
    `destination` INTEGER NOT NULL,
    `missionType` ENUM('Attack', 'Protect', 'Scout') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Character` ADD CONSTRAINT `Character_userEmail_fkey` FOREIGN KEY (`userEmail`) REFERENCES `User`(`email`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Buildings` ADD CONSTRAINT `Buildings_characterID_fkey` FOREIGN KEY (`characterID`) REFERENCES `Character`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ShipGroup` ADD CONSTRAINT `ShipGroup_id_fkey` FOREIGN KEY (`id`) REFERENCES `Character`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tasks_Construction` ADD CONSTRAINT `Tasks_Construction_characterID_fkey` FOREIGN KEY (`characterID`) REFERENCES `Character`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tasks_Naval` ADD CONSTRAINT `Tasks_Naval_id_fkey` FOREIGN KEY (`id`) REFERENCES `ShipGroup`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tasks_Naval` ADD CONSTRAINT `Tasks_Naval_characterID_fkey` FOREIGN KEY (`characterID`) REFERENCES `Character`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
