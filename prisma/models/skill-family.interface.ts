import { MovementType } from 'prisma/enums/movement-type.enum';
import { Action, SkillDescription, SkillName, Slot, Target } from '../enums';
import { IWeaponType } from './weapon-type.interface';

export interface ISkillFamily {
  name: SkillName;
  action: Action;
  target: Target;
  description: SkillDescription;
  slot: Slot;
  weaponRestrictions: IWeaponType[]; // weapon restrictions are disallowed weapon types
  movementRestrictions: MovementType[]; // movement restrictions are allowed movement types--consider renaming these
}
