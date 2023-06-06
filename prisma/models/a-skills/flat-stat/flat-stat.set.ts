import { ISkill } from 'prisma/models/skill.interface';
import {
  AtkDef,
  AtkRes,
  AtkSpd,
  DefRes,
  HpAtk,
  HpDef,
  HpRes,
  HpSpd,
  SpdDef,
  SpdRes,
  atk,
  def,
  hp,
  res,
  spd,
} from './flat-stat.family';

const hpSet: ISkill[] = [
  {
    skillFamily: hp,
    deltaFlat: { hp: 3 },
    tier: 1,
  },
  {
    skillFamily: hp,
    deltaFlat: { hp: 4 },
    tier: 2,
  },
  {
    skillFamily: hp,
    deltaFlat: { hp: 5 },
    tier: 3,
  },
];

const atkSet: ISkill[] = [
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
];

const spdSet: ISkill[] = [
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
];

const defSet: ISkill[] = [
  {
    skillFamily: def,
    deltaFlat: { def: 1 },
    tier: 1,
  },
  {
    skillFamily: def,
    deltaFlat: { def: 2 },
    tier: 2,
  },
  {
    skillFamily: def,
    deltaFlat: { def: 3 },
    tier: 3,
  },
];

const resSet: ISkill[] = [
  {
    skillFamily: res,
    deltaFlat: { res: 1 },
    tier: 1,
  },
  {
    skillFamily: res,
    deltaFlat: { res: 2 },
    tier: 2,
  },
  {
    skillFamily: res,
    deltaFlat: { res: 3 },
    tier: 3,
  },
];

const hpAtkSet: ISkill[] = [
  {
    skillFamily: HpAtk,
    deltaFlat: { hp: 3, atk: 1 },
    tier: 2,
  },
  {
    skillFamily: HpAtk,
    deltaFlat: { hp: 4, atk: 2 },
    tier: 3,
  },
];

const hpSpdSet: ISkill[] = [
  {
    skillFamily: HpSpd,
    deltaFlat: { hp: 3, spd: 1 },
    tier: 2,
  },
  {
    skillFamily: HpSpd,
    deltaFlat: { hp: 4, spd: 2 },
    tier: 3,
  },
];

const hpDefSet: ISkill[] = [
  {
    skillFamily: HpDef,
    deltaFlat: { hp: 3, def: 1 },
    tier: 2,
  },
  {
    skillFamily: HpDef,
    deltaFlat: { hp: 4, def: 2 },
    tier: 3,
  },
];

const hpResSet: ISkill[] = [
  {
    skillFamily: HpRes,
    deltaFlat: { hp: 3, res: 1 },
    tier: 2,
  },
  {
    skillFamily: HpRes,
    deltaFlat: { hp: 4, res: 2 },
    tier: 3,
  },
];

const atkSpdSet: ISkill[] = [
  {
    skillFamily: AtkSpd,
    deltaFlat: { atk: 1, spd: 1 },
    tier: 2,
  },
  {
    skillFamily: AtkSpd,
    deltaFlat: { atk: 2, spd: 2 },
    tier: 3,
  },
];

const atkDefSet: ISkill[] = [
  {
    skillFamily: AtkDef,
    deltaFlat: { atk: 1, def: 1 },
    tier: 2,
  },
  {
    skillFamily: AtkDef,
    deltaFlat: { atk: 2, def: 2 },
    tier: 3,
  },
];

const atkResSet: ISkill[] = [
  {
    skillFamily: AtkRes,
    deltaFlat: { atk: 1, res: 1 },
    tier: 2,
  },
  {
    skillFamily: AtkRes,
    deltaFlat: { atk: 2, res: 2 },
    tier: 3,
  },
];

const spdDefSet: ISkill[] = [
  {
    skillFamily: SpdDef,
    deltaFlat: { spd: 1, def: 1 },
    tier: 2,
  },
  {
    skillFamily: SpdDef,
    deltaFlat: { spd: 2, def: 2 },
    tier: 3,
  },
];

const spdResSet: ISkill[] = [
  {
    skillFamily: SpdRes,
    deltaFlat: { spd: 1, res: 1 },
    tier: 2,
  },
  {
    skillFamily: SpdRes,
    deltaFlat: { spd: 2, res: 2 },
    tier: 3,
  },
];

const defResSet: ISkill[] = [
  {
    skillFamily: DefRes,
    deltaFlat: { def: 1, res: 1 },
    tier: 2,
  },
  {
    skillFamily: DefRes,
    deltaFlat: { def: 2, res: 2 },
    tier: 3,
  },
];

export const flatStatSet: ISkill[] = [].concat(
  hpSet,
  atkSet,
  spdSet,
  defSet,
  resSet,
  hpAtkSet,
  hpSpdSet,
  hpDefSet,
  hpResSet,
  atkSpdSet,
  atkDefSet,
  atkResSet,
  spdDefSet,
  spdResSet,
  defResSet,
);
