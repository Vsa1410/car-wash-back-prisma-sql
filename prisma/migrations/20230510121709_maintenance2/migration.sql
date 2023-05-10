/*
  Warnings:

  - You are about to drop the column `balance` on the `Maintenance` table. All the data in the column will be lost.
  - Added the required column `value` to the `Maintenance` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Maintenance" DROP COLUMN "balance",
ADD COLUMN     "value" DECIMAL(65,30) NOT NULL;
