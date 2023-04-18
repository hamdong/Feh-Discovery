import {
  ardAtkDef,
  ardDefRes,
  atk,
  deathBlow,
  fierceStance,
  spd,
  def,
  res,
  hp
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
    skillFamily: hp,
    deltaFlat: { hp: 3 },
    tier: 1
  },
  {
    skillFamily: hp,
    deltaFlat: { hp: 4 },
    tier: 2
  },
  {
    skillFamily: hp,
    deltaFlat: { hp: 5 },
    tier: 3
  },
  {
    skillFamily: def,
    deltaFlat: { def: 1 },
    tier: 1
  },
  {
    skillFamily: def,
    deltaFlat: { def: 2 },
    tier: 2
  },
  {
    skillFamily: def,
    deltaFlat: { def: 3 },
    tier: 3
  },
  {
    skillFamily: res,
    deltaFlat: { res: 1 },
    tier: 1
  },
  {
    skillFamily: res,
    deltaFlat: { res: 2 },
    tier: 2
  },
  {
    skillFamily: res,
    deltaFlat: { res: 3 },
    tier: 3
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
];
