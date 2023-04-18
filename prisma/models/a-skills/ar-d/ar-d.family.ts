import { ISkillFamily } from '../../skill-family.interface';
import {
  Action,
  SkillDescription,
  SkillName,
  Slot,
  Target,
} from '../../../enums';

export const ardDefRes: ISkillFamily = {
  name: SkillName.ARDDefRes,
  action: Action.DefendingAR,
  target: Target.Unit,
  description: SkillDescription.GrantsInCombatStatByStructure,
  slot: Slot.A,
  restrictions: [],
};

export const ardAtkDef: ISkillFamily = {
  name: SkillName.ARDAtkDef,
  action: Action.DefendingAR,
  target: Target.Unit,
  description: SkillDescription.GrantsInCombatStatByStructure,
  slot: Slot.A,
  restrictions: [],
};
