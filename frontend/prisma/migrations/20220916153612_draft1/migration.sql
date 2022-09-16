/*
  Warnings:

  - You are about to drop the `tasks_construction` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tasks_naval` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `shipgroup` DROP FOREIGN KEY `ShipGroup_id_fkey`;

-- DropForeignKey
ALTER TABLE `tasks_construction` DROP FOREIGN KEY `Tasks_Construction_characterID_fkey`;

-- DropForeignKey
ALTER TABLE `tasks_naval` DROP FOREIGN KEY `Tasks_Naval_characterID_fkey`;

-- DropForeignKey
ALTER TABLE `tasks_naval` DROP FOREIGN KEY `Tasks_Naval_id_fkey`;

-- AlterTable
ALTER TABLE `shipgroup` MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT;

-- DropTable
DROP TABLE `tasks_construction`;

-- DropTable
DROP TABLE `tasks_naval`;

-- CreateTable
CREATE TABLE `Armada` (
    `characterID` INTEGER NOT NULL,
    `shipGroupID` INTEGER NOT NULL,

    UNIQUE INDEX `Armada_shipGroupID_key`(`shipGroupID`),
    PRIMARY KEY (`characterID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Task_Construction` (
    `id` INTEGER NOT NULL,
    `completed` DATETIME(3) NOT NULL,
    `characterID` INTEGER NOT NULL,
    `buildingtype` ENUM('Ship', 'Building') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Task_Naval` (
    `id` INTEGER NOT NULL,
    `completed` DATETIME(3) NOT NULL,
    `characterID` INTEGER NOT NULL,
    `destination` INTEGER NOT NULL,
    `missionType` ENUM('Attack', 'Protect', 'Scout') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Armada` ADD CONSTRAINT `Armada_shipGroupID_fkey` FOREIGN KEY (`shipGroupID`) REFERENCES `ShipGroup`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Armada` ADD CONSTRAINT `Armada_characterID_fkey` FOREIGN KEY (`characterID`) REFERENCES `Character`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ShipGroup` ADD CONSTRAINT `ShipGroup_characterID_fkey` FOREIGN KEY (`characterID`) REFERENCES `Character`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Task_Construction` ADD CONSTRAINT `Task_Construction_characterID_fkey` FOREIGN KEY (`characterID`) REFERENCES `Character`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Task_Naval` ADD CONSTRAINT `Task_Naval_id_fkey` FOREIGN KEY (`id`) REFERENCES `ShipGroup`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Task_Naval` ADD CONSTRAINT `Task_Naval_characterID_fkey` FOREIGN KEY (`characterID`) REFERENCES `Character`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
