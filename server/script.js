import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // await prisma.student.create({
  //   data: {
  //     name: 'Sunaina',
  //     rollNo: '06320802721'
  //   },
  // })

  await prisma.student.create({
    data: {
      name: "Rakesh",
      rollNo: '1'
    },
  })

  const allUsers = await prisma.student.findMany()
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