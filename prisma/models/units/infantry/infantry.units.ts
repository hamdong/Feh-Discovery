import { Weapon } from '../../../enums';
import { FireEmblem } from '../../../enums/fire-emblem.enum';
import { MovementType } from '../../../enums/movement-type.enum';
import { IUnit } from '../../unit.interface';

const infantryUnits: IUnit[] = [
  {
    name: 'Alfonse',
    title: 'Prince of Askr',
    origin: FireEmblem.Heroes,
    weaponType: Weapon.Sword,
    movementType: MovementType.Infantry,
  },
  {
    name: 'Sharena',
    title: 'Princess of Askr',
    origin: FireEmblem.Heroes,
    weaponType: Weapon.Lance,
    movementType: MovementType.Infantry,
  },
];
