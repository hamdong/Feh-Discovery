import { ISkillFamily } from '../../skill-family.interface';
import {
  Action,
  SkillDescription,
  SkillName,
  Slot,
  Target,
} from '../../../enums';
import { MovementType } from '../../../enums/movement-type.enum';

export const svalinnShield: ISkillFamily = {
  name: SkillName.SvalinnShield,
  action: Action.None,
  target: Target.Unit,
  description: SkillDescription.NeutralizeArmorEffectiveness,
  slot: Slot.A,
  weaponRestrictions: [],
  movementRestrictions: [MovementType.Armor],
};

export const granisShield: ISkillFamily = {
  name: SkillName.GranisShield,
  action: Action.None,
  target: Target.Unit,
  description: SkillDescription.NeutralizeCavalryEffectiveness,
  slot: Slot.A,
  weaponRestrictions: [],
  movementRestrictions: [MovementType.Cavalry],
};

export const iotesShield: ISkillFamily = {
  name: SkillName.IotesShield,
  action: Action.None,
  target: Target.Unit,
  description: SkillDescription.NeutralizeFlierEffectiveness,
  slot: Slot.A,
  weaponRestrictions: [],
  movementRestrictions: [MovementType.Flier],
};
