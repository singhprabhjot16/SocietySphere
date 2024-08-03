import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // await prisma.city.create({
  //   data: {
  //     name: 'Delhi',
  //     stateId: 2
  //   },
  // })
  await prisma.team.create({
    data: {
      memberName: 'Sunaina Uppal',
      memberRole: 'Vice President',
      societyId: 1,
      imageUrl: 'img.png'
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