import { Action } from '../enums/action.enum';
import { Slot } from '../enums/slot.enum';
import { SkillDescription, SkillName } from '../enums/skill-name.enum';
import { IWeaponType } from './weapon-type.interface';
import { Color } from '../enums/color.enum';
import { Weapon } from '../enums/weapon.enum';
import { Target } from '../enums/target.enum';

export interface ISkillFamily {
  name: SkillName;
  action: Action;
  target: Target;
  description: SkillDescription;
  slot: Slot;
  restrictions: IWeaponType[];
}

export const atk: ISkillFamily = {
  name: SkillName.Atk,
  action: Action.None,
  target: Target.Unit,
  description: SkillDescription.GrantsStat,
  slot: Slot.A,
  restrictions: [],
};

export const deathBlow: ISkillFamily = {
  name: SkillName.DeathBlow,
  action: Action.UnitInitiateCombat,
  target: Target.Unit,
  description: SkillDescription.UnitGainsAtk,
  slot: Slot.A,
  restrictions: [{ weapon: Weapon.Staff, color: Color.Colorless }],
};

export const fierceStance: ISkillFamily = {
  name: SkillName.FierceStance,
  action: Action.FoeInitiatesCombat,
  target: Target.Unit,
  description: SkillDescription.UnitGainsAtk,
  slot: Slot.A,
  restrictions: [],
};

export const spd: ISkillFamily = {
  name: SkillName.Spd,
  action: Action.None,
  target: Target.Unit,
  description: SkillDescription.GrantsStat,
  slot: Slot.A,
  restrictions: [],
};

export const hp: ISkillFamily = {
  name: SkillName.HP,
  action: Action.None,
  target: Target.Unit,
  description: SkillDescription.GrantsStat,
  slot: Slot.A,
  restrictions: [],
};

export const def: ISkillFamily = {
  name: SkillName.Def,
  action: Action.None,
  target: Target.Unit,
  description: SkillDescription.GrantsStat,
  slot: Slot.A,
  restrictions: [],
};

export const res: ISkillFamily = {
  name: SkillName.Res,
  action: Action.None,
  target: Target.Unit,
  description: SkillDescription.GrantsStat,
  slot: Slot.A,
  restrictions: [],
};