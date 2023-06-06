import { ISkill } from 'prisma/models/skill.interface';
import { fortressDef, fortressDefRes, fortressRes } from './fortress.family';

const fortressDefSet: ISkill[] = [
  {
    skillFamily: fortressDef,
    deltaFlat: { atk: -3, def: 3 },
    tier: 1,
  },
  {
    skillFamily: fortressDef,
    deltaFlat: { atk: -3, def: 4 },
    tier: 2,
  },
  {
    skillFamily: fortressDef,
    deltaFlat: { atk: -3, def: 5 },
    tier: 3,
  },
];

const fortressResSet: ISkill[] = [
  {
    skillFamily: fortressRes,
    deltaFlat: { atk: -3, res: 3 },
    tier: 1,
  },
  {
    skillFamily: fortressRes,
    deltaFlat: { atk: -3, res: 4 },
    tier: 2,
  },
  {
    skillFamily: fortressRes,
    deltaFlat: { atk: -3, res: 5 },
    tier: 3,
  },
];

const fortressDefResSet: ISkill[] = [
  {
    skillFamily: fortressDefRes,
    deltaFlat: { atk: -3, def: 3, res: 3 },
    tier: 2,
  },
  {
    skillFamily: fortressDefRes,
    deltaFlat: { atk: -3, def: 4, res: 4 },
    tier: 3,
  },
  {
    skillFamily: fortressDefRes,
    deltaFlat: { atk: -2, def: 6, res: 6 },
    tier: 4,
  },
];

export const fortressSet: ISkill[] = [].concat(
  fortressDefSet,
  fortressResSet,
  fortressDefResSet,
);
