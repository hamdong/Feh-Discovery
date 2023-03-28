import { Action } from '../enums/action.enum';
import { Slot } from '../enums/slot.enum';
import { SkillDescription, SkillName } from '../enums/skill-name.enum';

export class SkillFamily {
  name: string;
  action: string;
  description: string;
  slot: string;
}

export const atk: SkillFamily = {
  name: SkillName.Atk,
  action: Action.None,
  description: SkillDescription.GrantsStat,
  slot: Slot.A,
};

export const deathBlow: SkillFamily = {
  name: SkillName.DeathBlow,
  action: Action.UnitInitiateCombat,
  description: SkillDescription.UnitGainsAtk,
  slot: Slot.A,
};

export const fierceStance: SkillFamily = {
  name: SkillName.FierceStance,
  action: Action.FoeInitiatesCombat,
  description: SkillDescription.UnitGainsAtk,
  slot: Slot.A,
};
