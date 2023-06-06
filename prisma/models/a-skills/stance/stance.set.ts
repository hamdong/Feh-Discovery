import { ISkill } from 'prisma/models/skill.interface';
import { fierceStance } from './stance.family';

const fierceStanceSet: ISkill[] = [
  {
    skillFamily: fierceStance,
    deltaSoft: { atk: 2 },
    tier: 1,
  },
  {
    skillFamily: fierceStance,
    deltaSoft: { atk: 4 },
    tier: 2,
  },
  {
    skillFamily: fierceStance,
    deltaSoft: { atk: 6 },
    tier: 3,
  },
];

export const stanceSet: ISkill[] = [].concat(fierceStanceSet);
