import {
  ardAtkDef,
  ardDefRes,
  atk,
  deathBlow,
  fierceStance,
  spd,
  def,
  res,
  hp,
  HpAtk,
  HpSpd,
  HpDef,
  HpRes,
  AtkSpd,
  AtkDef,
  AtkRes,
  SpdDef,
  SpdRes,
  DefRes
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
    skillFamily: HpAtk,
    deltaFlat: { hp: 3, atk: 1 },
    tier: 2
  },
  {
    skillFamily: HpAtk,
    deltaFlat: { hp: 4, atk: 2 },
    tier: 3
  },
  {
    skillFamily: HpSpd,
    deltaFlat: { hp: 3, spd: 1 },
    tier: 2
  },
  {
    skillFamily: HpSpd,
    deltaFlat: { hp: 4, spd: 2 },
    tier: 3
  },
  {
    skillFamily: HpDef,
    deltaFlat: { hp: 3, def: 1 },
    tier: 2
  },
  {
    skillFamily: HpDef,
    deltaFlat: { hp: 4, def: 2 },
    tier: 3
  },
  {
    skillFamily: HpRes,
    deltaFlat: { hp: 3, res: 1 },
    tier: 2
  },
  {
    skillFamily: HpRes,
    deltaFlat: { hp: 4, res: 2 },
    tier: 3
  },
  {
    skillFamily: AtkSpd,
    deltaFlat: { atk: 1, spd: 1 },
    tier: 2
  },
  {
    skillFamily: AtkSpd,
    deltaFlat: { atk: 2, spd: 2 },
    tier: 3
  },
  {
    skillFamily: AtkDef,
    deltaFlat: { atk: 1, def: 1 },
    tier: 2
  },
  {
    skillFamily: AtkDef,
    deltaFlat: { atk: 2, def: 2 },
    tier: 3
  },
  {
    skillFamily: AtkRes,
    deltaFlat: { atk: 1, res: 1 },
    tier: 2
  },
  {
    skillFamily: AtkRes,
    deltaFlat: { atk: 2, res: 2 },
    tier: 3
  },
  {
    skillFamily: SpdDef,
    deltaFlat: { spd: 1, def: 1 },
    tier: 2
  },
  {
    skillFamily: SpdDef,
    deltaFlat: { spd: 2, def: 2 },
    tier: 3
  },
  {
    skillFamily: SpdRes,
    deltaFlat: { spd: 1, res: 1 },
    tier: 2
  },
  {
    skillFamily: SpdRes,
    deltaFlat: { spd: 2, res: 2 },
    tier: 3
  },
  {
    skillFamily: DefRes,
    deltaFlat: { def: 1, res: 1 },
    tier: 2
  },
  {
    skillFamily: DefRes,
    deltaFlat: { def: 2, res: 2 },
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
