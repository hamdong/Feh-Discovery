import { MovementType } from 'prisma/enums/movement-type.enum';
import { Name, Slot } from '../enums';
import { IWeaponType } from './weapon-type.interface';

export interface ISkillFamily {
  slot: Slot;
  weaponRestrictions: IWeaponType[]; // weapon restrictions are disallowed weapon types
  movementRestrictions: MovementType[]; // movement restrictions are allowed movement types--consider renaming these
}
