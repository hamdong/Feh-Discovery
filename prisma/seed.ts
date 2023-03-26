import { PrismaClient } from '@prisma/client';
import { Action } from './models/action.enum';
import { Slot } from './models/slot.enum';
import { Target } from './models/target.enum';

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

  const deathBlow1 = await createSkill(
    'Death Blow 1',
    Action.UnitInitiateCombat,
    { atk: 2 },
  );
  const deathBlow2 = await createSkill(
    'Death Blow 2',
    Action.UnitInitiateCombat,
    { atk: 4 },
  );
  const deathBlow3 = await createSkill(
    'Death Blow 3',
    Action.UnitInitiateCombat,
    { atk: 6 },
  );
  const deathBlow4 = await createSkill(
    'Death Blow 4',
    Action.UnitInitiateCombat,
    { atk: 8 },
  );

  const fierceStance1 = await createSkill(
    'Fierce Stance 1',
    Action.FoeInitiatesCombat,
    { atk: 2 },
  );
  const fierceStance2 = await createSkill(
    'Fierce Stance 2',
    Action.FoeInitiatesCombat,
    { atk: 4 },
  );
  const fierceStance3 = await createSkill(
    'Fierce Stance 3',
    Action.FoeInitiatesCombat,
    { atk: 6 },
  );
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

async function createSkill(name: string, action: Action, deltaSoft: Object) {
  return await prisma.skill.create({
    data: {
      name: name,
      slot: Slot.A,
      cond: {
        create: [
          {
            target: Target.Unit,
            action: action,
          },
        ],
      },
      effect: {
        create: [
          {
            description: 'Unit gains Atk',
            deltaSoft: JSON.stringify(deltaSoft),
          },
        ],
      },
    },
  });
}
