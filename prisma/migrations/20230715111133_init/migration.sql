/*
  Warnings:

  - You are about to alter the column `isPrimary` on the `Contact` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `Contact` MODIFY `isPrimary` VARCHAR(191) NOT NULL;
