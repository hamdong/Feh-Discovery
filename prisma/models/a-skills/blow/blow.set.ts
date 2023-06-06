import { ISkill } from 'prisma/models/skill.interface';
import { deathBlow } from './blow.family';

const deathBlowSet: ISkill[] = [
  {
    skillFamily: deathBlow,
    deltaSoft: { atk: 2 },
    tier: 1,
  },
  {
    skillFamily: deathBlow,
    deltaSoft: { atk: 4 },
    tier: 2,
  },
  {
    skillFamily: deathBlow,
    deltaSoft: { atk: 6 },
    tier: 3,
  },
  {
    skillFamily: deathBlow,
    deltaSoft: { atk: 8 },
    tier: 4,
  },
];

export const blowSet: ISkill[] = [].concat(deathBlowSet);
