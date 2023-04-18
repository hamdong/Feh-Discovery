import { Action, SkillDescription, SkillName, Slot, Target } from '../enums';
import { IWeaponType } from './weapon-type.interface';

export interface ISkillFamily {
  name: SkillName;
  action: Action;
  target: Target;
  description: SkillDescription;
  slot: Slot;
  restrictions: IWeaponType[];
}
