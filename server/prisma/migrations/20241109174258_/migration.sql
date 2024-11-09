/*
  Warnings:

  - A unique constraint covering the columns `[societyEmail]` on the table `Society` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Society_adminEmail_key";

-- CreateIndex
CREATE UNIQUE INDEX "Society_societyEmail_key" ON "Society"("societyEmail");
