import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // await prisma.city.create({
  //   data: {
  //     name: 'Delhi',
  //     stateId: 2
  //   },
  // })
  await prisma.college.create({
    data: {
      name: 'BPIT',
      collegeHead: 'Achal Kaushik',
      adminEmail: 'achal@bpit.edu.in',
      collegeEmail: 'bpit@gmail.com',
      passwordHash: '123',
      cityId: 1
    },
  })

  const allUsers = await prisma.college.findMany()
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