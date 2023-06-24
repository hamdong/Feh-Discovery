import { ISkillFamily } from '../../../models/skill-family.interface';
import {
  Action,
  SkillDescription,
  SkillName,
  Slot,
  Target,
} from '../../../enums';

export const fortressDef: ISkillFamily = {
  name: SkillName.FortressDef,
  action: Action.None,
  target: Target.Unit,
  description: SkillDescription.GrantsStat,
  slot: Slot.A,
  weaponRestrictions: [],
  movementRestrictions: [],
};

export const fortressRes: ISkillFamily = {
  name: SkillName.FortressRes,
  action: Action.None,
  target: Target.Unit,
  description: SkillDescription.GrantsStat,
  slot: Slot.A,
  weaponRestrictions: [],
  movementRestrictions: [],
};

export const fortressDefRes: ISkillFamily = {
  name: SkillName.FortressDefRes,
  action: Action.None,
  target: Target.Unit,
  description: SkillDescription.GrantsStat,
  slot: Slot.A,
  weaponRestrictions: [],
  movementRestrictions: [],
};
