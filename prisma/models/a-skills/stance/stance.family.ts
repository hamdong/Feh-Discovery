import { ISkillFamily } from '../../skill-family.interface';
import {
  Action,
  SkillDescription,
  SkillName,
  Slot,
  Target,
} from '../../../enums';

export const fierceStance: ISkillFamily = {
  name: SkillName.FierceStance,
  action: Action.FoeInitiatesCombat,
  target: Target.Unit,
  description: SkillDescription.GrantsInCombatStat,
  slot: Slot.A,
  weaponRestrictions: [],
  movementRestrictions: [],
};
