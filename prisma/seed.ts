import { PrismaClient } from '@prisma/client';
import { ISkill } from './models/skill.interface';
import { IWeaponType } from './models/weapon-type.interface';
import { skills } from './consts/skill-list.const';

const prisma = new PrismaClient();
async function main() {
  const alice = await prisma.user.upsert({
    where: { email: 'alice@prisma.io' },
    update: {},
    create: {
      email: 'alice@prisma.io',
      name: 'Alice',
      posts: {
        create: {
          title: 'Check out Prisma with Next.js',
          content: 'https://www.prisma.io/nextjs',
          published: true,
        },
      },
    },
  });
  const bob = await prisma.user.upsert({
    where: { email: 'bob@prisma.io' },
    update: {},
    create: {
      email: 'bob@prisma.io',
      name: 'Bob',
      posts: {
        create: [
          {
            title: 'Follow Prisma on Twitter',
            content: 'https://twitter.com/prisma',
            published: true,
          },
          {
            title: 'Follow Nexus on Twitter',
            content: 'https://twitter.com/nexusgql',
            published: true,
          },
        ],
      },
    },
  });
  console.log({ alice, bob });

  const skillsList = skills;

  for (let skill of skillsList) {
    await createSkill(skill);
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

async function createSkill(skill: ISkill) {
  await prisma.skill.create({
    data: {
      name: skill.name,
      description: skill.description,
      slot: skill.skillFamily.slot,
      weaponRestrictions: JSON.stringify(skill.skillFamily.weaponRestrictions),
      movementRestrictions: JSON.stringify(
        skill.skillFamily.movementRestrictions,
      ),
      effect: {
        create: [
          {
            deltaSoft: JSON.stringify(skill.deltaSoft),
            deltaHard: JSON.stringify(skill.deltaHard),
            deltaFlat: JSON.stringify(skill.deltaFlat),
          },
        ],
      },
    },
  });
}
