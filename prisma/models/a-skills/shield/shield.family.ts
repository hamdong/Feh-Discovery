import { ISkillFamily } from '../../skill-family.interface';
import { Slot } from '../../../enums';
import { MovementType } from '../../../enums/movement-type.enum';

export const svalinnShield: ISkillFamily = {
  slot: Slot.A,
  weaponRestrictions: [],
  movementRestrictions: [MovementType.Armor],
};

export const granisShield: ISkillFamily = {
  slot: Slot.A,
  weaponRestrictions: [],
  movementRestrictions: [MovementType.Cavalry],
};

export const iotesShield: ISkillFamily = {
  slot: Slot.A,
  weaponRestrictions: [],
  movementRestrictions: [MovementType.Flier],
};
