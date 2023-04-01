import { Action } from '../enums/action.enum';
import { Slot } from '../enums/slot.enum';
import { SkillDescription, SkillName } from '../enums/skill-name.enum';
import { IWeaponType } from './weapon-type.interface';
import { Color } from '../enums/color.enum';
import { Weapon } from '../enums/weapon.enum';

export class SkillFamily {
  name: string;
  action: string;
  description: string;
  slot: string;
  restrictions: IWeaponType[];
}

export const atk: SkillFamily = {
  name: SkillName.Atk,
  action: Action.None,
  description: SkillDescription.GrantsStat,
  slot: Slot.A,
  restrictions: []
};

export const deathBlow: SkillFamily = {
  name: SkillName.DeathBlow,
  action: Action.UnitInitiateCombat,
  description: SkillDescription.UnitGainsAtk,
  slot: Slot.A,
  restrictions: [{ weapon: Weapon.Staff, color: Color.Colorless }]
};

export const fierceStance: SkillFamily = {
  name: SkillName.FierceStance,
  action: Action.FoeInitiatesCombat,
  description: SkillDescription.UnitGainsAtk,
  slot: Slot.A,
  restrictions: []
};

export const spd: SkillFamily = {
  name: SkillName.Spd,
  action: Action.None,
  description: SkillDescription.GrantsStat,
  slot: Slot.A,
  restrictions: []
};