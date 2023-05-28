import {
  ardAtkDef,
  ardDefRes,
  atk,
  deathBlow,
  fierceStance,
  spd,
  fortressDef,
  fortressRes,
  fortressDefRes
} from '../models';
import { ISkill } from '../models/skill.interface';

export const skills: ISkill[] = [
  {
    skillFamily: atk,
    deltaFlat: { atk: 1 },
    tier: 1,
  },
  {
    skillFamily: atk,
    deltaFlat: { atk: 2 },
    tier: 2,
  },
  {
    skillFamily: atk,
    deltaFlat: { atk: 3 },
    tier: 3,
  },
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
  {
    skillFamily: spd,
    deltaFlat: { spd: 1 },
    tier: 1,
  },
  {
    skillFamily: spd,
    deltaFlat: { spd: 2 },
    tier: 2,
  },
  {
    skillFamily: spd,
    deltaFlat: { spd: 3 },
    tier: 3,
  },
  {
    skillFamily: ardDefRes,
    deltaSoft: { def: 4, res: 4 },
    statNotes: 'Based on number of defense structures',
    tier: 1,
  },
  {
    skillFamily: ardDefRes,
    deltaSoft: { def: 7, res: 7 },
    statNotes: 'Based on number of defense structures',
    tier: 2,
  },
  {
    skillFamily: ardDefRes,
    deltaSoft: { def: 10, res: 10 },
    statNotes: 'Based on number of defense structures',
    tier: 3,
  },
  {
    skillFamily: ardAtkDef,
    deltaSoft: { atk: 4, def: 4 },
    statNotes: 'Based on number of defense structures',
    tier: 1,
  },
  {
    skillFamily: ardAtkDef,
    deltaSoft: { atk: 7, def: 7 },
    statNotes: 'Based on number of defense structures',
    tier: 2,
  },
  {
    skillFamily: ardAtkDef,
    deltaSoft: { atk: 10, def: 10 },
    statNotes: 'Based on number of defense structures',
    tier: 3,
  },
  {
    skillFamily: fortressDef,
    deltaFlat: { atk: -3, def: 3 },
    tier: 1,
  },
  {
    skillFamily: fortressDef,
    deltaFlat: { atk: -3, def: 4 },
    tier: 2
  },
  {
    skillFamily: fortressDef,
    deltaFlat: { atk: -3, def: 5 },
    tier: 3
  },
  {
    skillFamily: fortressRes,
    deltaFlat: { atk: -3, res: 3 },
    tier: 1,
  },
  {
    skillFamily: fortressRes,
    deltaFlat: { atk: -3, res: 4 },
    tier: 2
  },
  {
    skillFamily: fortressRes,
    deltaFlat: { atk: -3, res: 5 },
    tier: 3
  },
  {
    skillFamily: fortressDefRes,
    deltaFlat: { atk: -3, def: 3, res: 3},
    tier: 2,
  },
  {
    skillFamily: fortressDefRes,
    deltaFlat: { atk: -3, def: 4, res: 4 },
    tier: 3
  },
  {
    skillFamily: fortressDefRes,
    deltaFlat: { atk: -2, def: 6, res: 6 },
    tier: 4
  },
];
