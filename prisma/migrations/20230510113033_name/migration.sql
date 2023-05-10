/*
  Warnings:

  - Added the required column `name` to the `Washer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Washer" ADD COLUMN     "name" VARCHAR(255) NOT NULL;
