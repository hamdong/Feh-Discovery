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
