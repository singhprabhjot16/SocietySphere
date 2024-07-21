-- CreateTable
CREATE TABLE "State" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "State_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "City" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "stateId" INTEGER NOT NULL,

    CONSTRAINT "City_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "College" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "collegeHead" TEXT NOT NULL,
    "adminEmail" TEXT NOT NULL,
    "collegeEmail" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "cityId" INTEGER NOT NULL,

    CONSTRAINT "College_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Society" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "societyHead" TEXT NOT NULL,
    "societyEmail" TEXT NOT NULL,
    "adminEmail" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "collegeId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Society_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Team" (
    "id" SERIAL NOT NULL,
    "memberName" TEXT NOT NULL,
    "memberRole" TEXT NOT NULL,
    "societyId" INTEGER NOT NULL,
    "imageUrl" TEXT,
    "caption" TEXT DEFAULT 'default_url',

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gallery" (
    "id" SERIAL NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "caption" TEXT,
    "societyId" INTEGER NOT NULL,

    CONSTRAINT "Gallery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Announcement" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "societyId" INTEGER NOT NULL,

    CONSTRAINT "Announcement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Achievement" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "societyId" INTEGER NOT NULL,
    "imageUrl" TEXT,
    "caption" TEXT,

    CONSTRAINT "Achievement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FAQ" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "societyId" INTEGER NOT NULL,

    CONSTRAINT "FAQ_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "State_name_key" ON "State"("name");

-- CreateIndex
CREATE UNIQUE INDEX "College_adminEmail_key" ON "College"("adminEmail");

-- CreateIndex
CREATE UNIQUE INDEX "College_collegeEmail_key" ON "College"("collegeEmail");

-- CreateIndex
CREATE UNIQUE INDEX "Society_adminEmail_key" ON "Society"("adminEmail");

-- AddForeignKey
ALTER TABLE "City" ADD CONSTRAINT "City_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "State"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "College" ADD CONSTRAINT "College_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Society" ADD CONSTRAINT "Society_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "College"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_societyId_fkey" FOREIGN KEY ("societyId") REFERENCES "Society"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gallery" ADD CONSTRAINT "Gallery_societyId_fkey" FOREIGN KEY ("societyId") REFERENCES "Society"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Announcement" ADD CONSTRAINT "Announcement_societyId_fkey" FOREIGN KEY ("societyId") REFERENCES "Society"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Achievement" ADD CONSTRAINT "Achievement_societyId_fkey" FOREIGN KEY ("societyId") REFERENCES "Society"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FAQ" ADD CONSTRAINT "FAQ_societyId_fkey" FOREIGN KEY ("societyId") REFERENCES "Society"("id") ON DELETE CASCADE ON UPDATE CASCADE;
