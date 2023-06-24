import { ISkillFamily } from '../../skill-family.interface';
import {
  Action,
  Color,
  SkillDescription,
  SkillName,
  Slot,
  Target,
  Weapon,
} from '../../../enums';

export const deathBlow: ISkillFamily = {
  name: SkillName.DeathBlow,
  action: Action.UnitInitiateCombat,
  target: Target.Unit,
  description: SkillDescription.GrantsInCombatStat,
  slot: Slot.A,
  weaponRestrictions: [{ weapon: Weapon.Staff, color: Color.Colorless }],
  movementRestrictions: [],
};
