import { PrismaClient } from '@prisma/client';

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

  const deathBlow1 = await prisma.skill.create({
    data: {
      name: 'Death Blow 1',
      slot: 'A',
      cond: {
        create: [
          {
            cond: 'Unit initiates combat',
          },
        ],
      },
      effect: {
        create: [
          {
            description: 'Unit gains Atk',
            deltaSoft: JSON.stringify({ atk: 2 }),
          },
        ],
      },
    },
  });

  const deathBlow2 = await prisma.skill.create({
    data: {
      name: 'Death Blow 2',
      slot: 'A',
      cond: {
        create: [
          {
            cond: 'Unit initiates combat',
          },
        ],
      },
      effect: {
        create: [
          {
            description: 'Unit gains Atk',
            deltaSoft: JSON.stringify({ atk: 4 }),
          },
        ],
      },
    },
  });

  const deathBlow3 = await prisma.skill.create({
    data: {
      name: 'Death Blow 3',
      slot: 'A',
      cond: {
        create: [
          {
            cond: 'Unit initiates combat',
          },
        ],
      },
      effect: {
        create: [
          {
            description: 'Unit gains Atk',
            deltaSoft: JSON.stringify({ atk: 6 }),
          },
        ],
      },
    },
  });
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
