import { Description, Name } from '../../../enums';
import { ISkill } from '../../skill.interface';
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
    name: Name.HP1,
    skillFamily: hp,
    description: Description.HP1,
    deltaFlat: { hp: 3 },
  },
  {
    name: Name.HP2,
    skillFamily: hp,
    description: Description.HP2,
    deltaFlat: { hp: 4 },
  },
  {
    name: Name.HP3,
    skillFamily: hp,
    description: Description.HP3,
    deltaFlat: { hp: 5 },
  },
];

const atkSet: ISkill[] = [
  {
    name: Name.Atk1,
    skillFamily: atk,
    description: Description.Atk1,
    deltaFlat: { atk: 1 },
  },
  {
    name: Name.Atk2,
    skillFamily: atk,
    description: Description.Atk2,
    deltaFlat: { atk: 2 },
  },
  {
    name: Name.Atk3,
    skillFamily: atk,
    description: Description.Atk3,
    deltaFlat: { atk: 3 },
  },
];

const spdSet: ISkill[] = [
  {
    name: Name.Spd1,
    skillFamily: spd,
    description: Description.Spd1,
    deltaFlat: { spd: 1 },
  },
  {
    name: Name.Spd2,
    skillFamily: spd,
    description: Description.Spd2,
    deltaFlat: { spd: 2 },
  },
  {
    name: Name.Spd3,
    skillFamily: spd,
    description: Description.Spd3,
    deltaFlat: { spd: 3 },
  },
];

const defSet: ISkill[] = [
  {
    name: Name.Def1,
    skillFamily: def,
    description: Description.Def1,
    deltaFlat: { def: 1 },
  },
  {
    name: Name.Def2,
    skillFamily: def,
    description: Description.Def2,
    deltaFlat: { def: 2 },
  },
  {
    name: Name.Def3,
    skillFamily: def,
    description: Description.Def3,
    deltaFlat: { def: 3 },
  },
];

const resSet: ISkill[] = [
  {
    name: Name.Res1,
    skillFamily: res,
    description: Description.Res1,
    deltaFlat: { res: 1 },
  },
  {
    name: Name.Res2,
    skillFamily: res,
    description: Description.Res2,
    deltaFlat: { res: 2 },
  },
  {
    name: Name.Res3,
    skillFamily: res,
    description: Description.Res3,
    deltaFlat: { res: 3 },
  },
];

const hpAtkSet: ISkill[] = [
  {
    name: Name.HPAtk1,
    skillFamily: HpAtk,
    description: Description.HPAtk1,
    deltaFlat: { hp: 3, atk: 1 },
  },
  {
    name: Name.HPAtk2,
    skillFamily: HpAtk,
    description: Description.HPAtk2,
    deltaFlat: { hp: 4, atk: 2 },
  },
];

const hpSpdSet: ISkill[] = [
  {
    name: Name.HPSpd1,
    skillFamily: HpSpd,
    description: Description.HPSpd1,
    deltaFlat: { hp: 3, spd: 1 },
  },
  {
    name: Name.HPSpd2,
    skillFamily: HpSpd,
    description: Description.HPSpd2,
    deltaFlat: { hp: 4, spd: 2 },
  },
];

const hpDefSet: ISkill[] = [
  {
    name: Name.HPDef1,
    skillFamily: HpDef,
    description: Description.HPDef1,
    deltaFlat: { hp: 3, def: 1 },
  },
  {
    name: Name.HPDef2,
    skillFamily: HpDef,
    description: Description.HPDef2,
    deltaFlat: { hp: 4, def: 2 },
  },
];

const hpResSet: ISkill[] = [
  {
    name: Name.HPRes1,
    skillFamily: HpRes,
    description: Description.HPRes1,
    deltaFlat: { hp: 3, res: 1 },
  },
  {
    name: Name.HPRes2,
    skillFamily: HpRes,
    description: Description.HPRes2,
    deltaFlat: { hp: 4, res: 2 },
  },
];

const atkSpdSet: ISkill[] = [
  {
    name: Name.AtkSpd1,
    skillFamily: AtkSpd,
    description: Description.AtkSpd1,
    deltaFlat: { atk: 1, spd: 1 },
  },
  {
    name: Name.AtkSpd2,
    skillFamily: AtkSpd,
    description: Description.AtkSpd2,
    deltaFlat: { atk: 2, spd: 2 },
  },
];

const atkDefSet: ISkill[] = [
  {
    name: Name.AtkDef1,
    skillFamily: AtkDef,
    description: Description.AtkDef1,
    deltaFlat: { atk: 1, def: 1 },
  },
  {
    name: Name.AtkDef2,
    skillFamily: AtkDef,
    description: Description.AtkDef2,
    deltaFlat: { atk: 2, def: 2 },
  },
];

const atkResSet: ISkill[] = [
  {
    name: Name.AtkRes1,
    skillFamily: AtkRes,
    description: Description.AtkRes1,
    deltaFlat: { atk: 1, res: 1 },
  },
  {
    name: Name.AtkRes2,
    skillFamily: AtkRes,
    description: Description.AtkRes2,
    deltaFlat: { atk: 2, res: 2 },
  },
];

const spdDefSet: ISkill[] = [
  {
    name: Name.SpdDef1,
    skillFamily: SpdDef,
    description: Description.SpdDef1,
    deltaFlat: { spd: 1, def: 1 },
  },
  {
    name: Name.SpdDef2,
    skillFamily: SpdDef,
    description: Description.SpdDef2,
    deltaFlat: { spd: 2, def: 2 },
  },
];

const spdResSet: ISkill[] = [
  {
    name: Name.SpdRes1,
    skillFamily: SpdRes,
    description: Description.SpdRes1,
    deltaFlat: { spd: 1, res: 1 },
  },
  {
    name: Name.SpdRes2,
    skillFamily: SpdRes,
    description: Description.SpdRes2,
    deltaFlat: { spd: 2, res: 2 },
  },
];

const defResSet: ISkill[] = [
  {
    name: Name.DefRes1,
    skillFamily: DefRes,
    description: Description.DefRes1,
    deltaFlat: { def: 1, res: 1 },
  },
  {
    name: Name.DefRes2,
    skillFamily: DefRes,
    description: Description.DefRes2,
    deltaFlat: { def: 2, res: 2 },
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
