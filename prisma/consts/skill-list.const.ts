import * as s from '../models';
import { ISkill } from '../models/skill.interface';

export const skills: ISkill[] = [
  {
    skillFamily: s.atk,
    deltaFlat: { atk: 1 },
    tier: 1,
  },
  {
    skillFamily: s.atk,
    deltaFlat: { atk: 2 },
    tier: 2,
  },
  {
    skillFamily: s.atk,
    deltaFlat: { atk: 3 },
    tier: 3,
  },
  {
    skillFamily: s.deathBlow,
    deltaSoft: { atk: 2 },
    tier: 1,
  },
  {
    skillFamily: s.deathBlow,
    deltaSoft: { atk: 4 },
    tier: 2,
  },
  {
    skillFamily: s.deathBlow,
    deltaSoft: { atk: 6 },
    tier: 3,
  },
  {
    skillFamily: s.deathBlow,
    deltaSoft: { atk: 8 },
    tier: 4,
  },
  {
    skillFamily: s.fierceStance,
    deltaSoft: { atk: 2 },
    tier: 1,
  },
  {
    skillFamily: s.fierceStance,
    deltaSoft: { atk: 4 },
    tier: 2,
  },
  {
    skillFamily: s.fierceStance,
    deltaSoft: { atk: 6 },
    tier: 3,
  },
  {
    skillFamily: s.spd,
    deltaFlat: { spd: 1 },
    tier: 1,
  },
  {
    skillFamily: s.spd,
    deltaFlat: { spd: 2 },
    tier: 2,
  },
  {
    skillFamily: s.spd,
    deltaFlat: { spd: 3 },
    tier: 3,
  },
  {
    skillFamily: s.hp,
    deltaFlat: { hp: 3 },
    tier: 1
  },
  {
    skillFamily: s.hp,
    deltaFlat: { hp: 4 },
    tier: 2
  },
  {
    skillFamily: s.hp,
    deltaFlat: { hp: 5 },
    tier: 3
  },
  {
    skillFamily: s.def,
    deltaFlat: { def: 1 },
    tier: 1
  },
  {
    skillFamily: s.def,
    deltaFlat: { def: 2 },
    tier: 2
  },
  {
    skillFamily: s.def,
    deltaFlat: { def: 3 },
    tier: 3
  },
  {
    skillFamily: s.res,
    deltaFlat: { res: 1 },
    tier: 1
  },
  {
    skillFamily: s.res,
    deltaFlat: { res: 2 },
    tier: 2
  },
  {
    skillFamily: s.res,
    deltaFlat: { res: 3 },
    tier: 3
  },
  {
    skillFamily: s.HpAtk,
    deltaFlat: { hp: 3, atk: 1 },
    tier: 2
  },
  {
    skillFamily: s.HpAtk,
    deltaFlat: { hp: 4, atk: 2 },
    tier: 3
  },
  {
    skillFamily: s.HpSpd,
    deltaFlat: { hp: 3, spd: 1 },
    tier: 2
  },
  {
    skillFamily: s.HpSpd,
    deltaFlat: { hp: 4, spd: 2 },
    tier: 3
  },
  {
    skillFamily: s.HpDef,
    deltaFlat: { hp: 3, def: 1 },
    tier: 2
  },
  {
    skillFamily: s.HpDef,
    deltaFlat: { hp: 4, def: 2 },
    tier: 3
  },
  {
    skillFamily: s.HpRes,
    deltaFlat: { hp: 3, res: 1 },
    tier: 2
  },
  {
    skillFamily: s.HpRes,
    deltaFlat: { hp: 4, res: 2 },
    tier: 3
  },
  {
    skillFamily: s.AtkSpd,
    deltaFlat: { atk: 1, spd: 1 },
    tier: 2
  },
  {
    skillFamily: s.AtkSpd,
    deltaFlat: { atk: 2, spd: 2 },
    tier: 3
  },
  {
    skillFamily: s.AtkDef,
    deltaFlat: { atk: 1, def: 1 },
    tier: 2
  },
  {
    skillFamily: s.AtkDef,
    deltaFlat: { atk: 2, def: 2 },
    tier: 3
  },
  {
    skillFamily: s.AtkRes,
    deltaFlat: { atk: 1, res: 1 },
    tier: 2
  },
  {
    skillFamily: s.AtkRes,
    deltaFlat: { atk: 2, res: 2 },
    tier: 3
  },
  {
    skillFamily: s.SpdDef,
    deltaFlat: { spd: 1, def: 1 },
    tier: 2
  },
  {
    skillFamily: s.SpdDef,
    deltaFlat: { spd: 2, def: 2 },
    tier: 3
  },
  {
    skillFamily: s.SpdRes,
    deltaFlat: { spd: 1, res: 1 },
    tier: 2
  },
  {
    skillFamily: s.SpdRes,
    deltaFlat: { spd: 2, res: 2 },
    tier: 3
  },
  {
    skillFamily: s.DefRes,
    deltaFlat: { def: 1, res: 1 },
    tier: 2
  },
  {
    skillFamily: s.DefRes,
    deltaFlat: { def: 2, res: 2 },
    tier: 3
  },
  {
    skillFamily: s.ardDefRes,
    deltaSoft: { def: 4, res: 4 },
    statNotes: 'Based on number of defense structures',
    tier: 1,
  },
  {
    skillFamily: s.ardDefRes,
    deltaSoft: { def: 7, res: 7 },
    statNotes: 'Based on number of defense structures',
    tier: 2,
  },
  {
    skillFamily: s.ardDefRes,
    deltaSoft: { def: 10, res: 10 },
    statNotes: 'Based on number of defense structures',
    tier: 3,
  },
  {
    skillFamily: s.ardAtkDef,
    deltaSoft: { atk: 4, def: 4 },
    statNotes: 'Based on number of defense structures',
    tier: 1,
  },
  {
    skillFamily: s.ardAtkDef,
    deltaSoft: { atk: 7, def: 7 },
    statNotes: 'Based on number of defense structures',
    tier: 2,
  },
  {
    skillFamily: s.ardAtkDef,
    deltaSoft: { atk: 10, def: 10 },
    statNotes: 'Based on number of defense structures',
    tier: 3,
  },
  {
    skillFamily: s.fortressDef,
    deltaFlat: { atk: -3, def: 3 },
    tier: 1,
  },
  {
    skillFamily: s.fortressDef,
    deltaFlat: { atk: -3, def: 4 },
    tier: 2
  },
  {
    skillFamily: s.fortressDef,
    deltaFlat: { atk: -3, def: 5 },
    tier: 3
  },
  {
    skillFamily: s.fortressRes,
    deltaFlat: { atk: -3, res: 3 },
    tier: 1,
  },
  {
    skillFamily: s.fortressRes,
    deltaFlat: { atk: -3, res: 4 },
    tier: 2
  },
  {
    skillFamily: s.fortressRes,
    deltaFlat: { atk: -3, res: 5 },
    tier: 3
  },
  {
    skillFamily: s.fortressDefRes,
    deltaFlat: { atk: -3, def: 3, res: 3},
    tier: 2,
  },
  {
    skillFamily: s.fortressDefRes,
    deltaFlat: { atk: -3, def: 4, res: 4 },
    tier: 3
  },
  {
    skillFamily: s.fortressDefRes,
    deltaFlat: { atk: -2, def: 6, res: 6 },
    tier: 4
  },
];
