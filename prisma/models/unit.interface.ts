import { Weapon } from '../enums';
import { FireEmblem } from '../enums/fire-emblem.enum';
import { MovementType } from '../enums/movement-type.enum';

export interface IUnit {
  name: string;
  title: string;
  origin: FireEmblem;
  weaponType: Weapon;
  movementType: MovementType;
}
