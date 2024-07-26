/*
  Warnings:

  - Added the required column `aboutSociety` to the `Society` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Society" ADD COLUMN     "aboutSociety" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Alumni" (
    "id" SERIAL NOT NULL,
    "alumniName" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "societyId" INTEGER NOT NULL,
    "imageUrl" TEXT,
    "caption" TEXT,

    CONSTRAINT "Alumni_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Alumni" ADD CONSTRAINT "Alumni_societyId_fkey" FOREIGN KEY ("societyId") REFERENCES "Society"("id") ON DELETE CASCADE ON UPDATE CASCADE;
