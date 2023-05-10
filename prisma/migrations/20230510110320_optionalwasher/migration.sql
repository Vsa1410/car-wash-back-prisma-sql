-- DropForeignKey
ALTER TABLE "Work" DROP CONSTRAINT "Work_secondWasherId_fkey";

-- AlterTable
ALTER TABLE "Work" ALTER COLUMN "secondWasherId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Work" ADD CONSTRAINT "Work_secondWasherId_fkey" FOREIGN KEY ("secondWasherId") REFERENCES "Washer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
