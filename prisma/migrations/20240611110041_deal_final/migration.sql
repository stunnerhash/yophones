/*
  Warnings:

  - The `Telcos:initial_cost` column on the `Deal` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `Telcos:month_cost` column on the `Deal` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `Telcos:inc_data` column on the `Deal` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Deal" DROP COLUMN "Telcos:initial_cost",
ADD COLUMN     "Telcos:initial_cost" DOUBLE PRECISION,
DROP COLUMN "Telcos:month_cost",
ADD COLUMN     "Telcos:month_cost" DOUBLE PRECISION,
DROP COLUMN "Telcos:inc_data",
ADD COLUMN     "Telcos:inc_data" INTEGER;
