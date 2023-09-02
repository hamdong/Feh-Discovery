import { ISkillFamily } from '../../skill-family.interface';
import { Color, Slot, Weapon } from '../../../enums';

export const deathBlow: ISkillFamily = {
  slot: Slot.A,
  weaponRestrictions: [{ weapon: Weapon.Staff, color: Color.Colorless }],
  movementRestrictions: [],
};
