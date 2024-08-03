/*
  Warnings:

  - You are about to drop the column `alumniName` on the `Alumni` table. All the data in the column will be lost.
  - You are about to drop the column `memberName` on the `Team` table. All the data in the column will be lost.
  - Added the required column `studentId` to the `Alumni` table without a default value. This is not possible if the table is not empty.
  - Added the required column `studentId` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Alumni" DROP COLUMN "alumniName",
ADD COLUMN     "studentId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Team" DROP COLUMN "memberName",
ADD COLUMN     "studentId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "rollNo" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_rollNo_key" ON "Student"("rollNo");

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alumni" ADD CONSTRAINT "Alumni_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;
