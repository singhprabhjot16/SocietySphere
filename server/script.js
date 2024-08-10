import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // await prisma.student.create({
  //   data: {
  //     name: 'Sunaina',
  //     rollNo: '06320802721'
  //   },
  // })

  await prisma.team.create({
    data: {
      memberRole: 'Vice President',
      societyId: 2,
      studentId: 1,
      imageUrl: 'image.png',
      caption: 'this is our first test...'
    },
  })

  const allUsers = await prisma.team.findMany()
  console.log(allUsers)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })