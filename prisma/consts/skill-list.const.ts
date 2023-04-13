import * as fam from '../models/skill-family.interface';
import { ISkill } from '../models/skill.interface';

export const skills: ISkill[] = [
  {
    skillFamily: fam.atk,
    deltaFlat: { atk: 1 },
    tier: 1,
  },
  {
    skillFamily: fam.atk,
    deltaFlat: { atk: 2 },
    tier: 2,
  },
  {
    skillFamily: fam.atk,
    deltaFlat: { atk: 3 },
    tier: 3,
  },
  {
    skillFamily: fam.deathBlow,
    deltaSoft: { atk: 2 },
    tier: 1,
  },
  {
    skillFamily: fam.deathBlow,
    deltaSoft: { atk: 4 },
    tier: 2,
  },
  {
    skillFamily: fam.deathBlow,
    deltaSoft: { atk: 6 },
    tier: 3,
  },
  {
    skillFamily: fam.deathBlow,
    deltaSoft: { atk: 8 },
    tier: 4,
  },
  {
    skillFamily: fam.fierceStance,
    deltaSoft: { atk: 2 },
    tier: 1,
  },
  {
    skillFamily: fam.fierceStance,
    deltaSoft: { atk: 4 },
    tier: 2,
  },
  {
    skillFamily: fam.fierceStance,
    deltaSoft: { atk: 6 },
    tier: 3,
  },
  {
    skillFamily: fam.spd,
    deltaFlat: { spd: 1 },
    tier: 1,
  },
  {
    skillFamily: fam.spd,
    deltaFlat: { spd: 2 },
    tier: 2,
  },
  {
    skillFamily: fam.spd,
    deltaFlat: { spd: 3 },
    tier: 3,
  },
  {
    skillFamily: fam.hp,
    deltaFlat: { hp: 3 },
    tier: 1
  },
  {
    skillFamily: fam.hp,
    deltaFlat: { hp: 4 },
    tier: 2
  },
  {
    skillFamily: fam.hp,
    deltaFlat: { hp: 5 },
    tier: 3
  },
  {
    skillFamily: fam.def,
    deltaFlat: { def: 1 },
    tier: 1
  },
  {
    skillFamily: fam.def,
    deltaFlat: { def: 2 },
    tier: 2
  },
  {
    skillFamily: fam.def,
    deltaFlat: { def: 3 },
    tier: 3
  },
  {
    skillFamily: fam.res,
    deltaFlat: { res: 1 },
    tier: 1
  },
  {
    skillFamily: fam.res,
    deltaFlat: { res: 2 },
    tier: 2
  },
  {
    skillFamily: fam.res,
    deltaFlat: { res: 3 },
    tier: 3
  },
];
