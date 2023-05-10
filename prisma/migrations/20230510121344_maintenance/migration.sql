-- CreateTable
CREATE TABLE "Maintenance" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "balance" DECIMAL(65,30) NOT NULL,
    "description" TEXT,
    "expenses" BOOLEAN NOT NULL,

    CONSTRAINT "Maintenance_pkey" PRIMARY KEY ("id")
);
