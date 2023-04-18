import { ISkillFamily } from '../../../models/skill-family.interface';
import {
  Action,
  SkillDescription,
  SkillName,
  Slot,
  Target,
} from '../../../enums';

export const atk: ISkillFamily = {
  name: SkillName.Atk,
  action: Action.None,
  target: Target.Unit,
  description: SkillDescription.GrantsStat,
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

export const hp: ISkillFamily = {
  name: SkillName.HP,
  action: Action.None,
  target: Target.Unit,
  description: SkillDescription.GrantsStat,
  slot: Slot.A,
  restrictions: [],
};