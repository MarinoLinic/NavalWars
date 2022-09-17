-- AddForeignKey
ALTER TABLE `Task_Naval` ADD CONSTRAINT `Task_Naval_destination_fkey` FOREIGN KEY (`destination`) REFERENCES `Character`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
