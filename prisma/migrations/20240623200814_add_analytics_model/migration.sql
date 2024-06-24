/*
  Warnings:

  - You are about to drop the `Colour` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Deal" ADD COLUMN     "hot_deal" TEXT;

-- AlterTable
ALTER TABLE "Phone" ADD COLUMN     "excludeSearch" TEXT[];

-- DropTable
DROP TABLE "Colour";

-- CreateTable
CREATE TABLE "Analytics" (
    "id" SERIAL NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userAgent" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "screenResolution" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "href" TEXT NOT NULL,
    "dealName" TEXT NOT NULL,
    "network" TEXT NOT NULL,

    CONSTRAINT "Analytics_pkey" PRIMARY KEY ("id")
);
