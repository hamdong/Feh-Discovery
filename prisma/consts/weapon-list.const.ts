import { Color } from '../enums/color.enum';
import { Weapon } from '../enums/weapon.enum';
import { IWeaponType } from '../models/weapon-type.interface';

export const weapons: IWeaponType[] = [
  {
    weapon: Weapon.Sword,
    color: Color.Red,
  },
  {
    weapon: Weapon.Lance,
    color: Color.Blue,
  },
  {
    weapon: Weapon.Axe,
    color: Color.Green,
  },
  {
    weapon: Weapon.Bow,
    color: Color.Red,
  },
  {
    weapon: Weapon.Bow,
    color: Color.Blue,
  },
  {
    weapon: Weapon.Bow,
    color: Color.Green,
  },
  {
    weapon: Weapon.Bow,
    color: Color.Colorless,
  },
  {
    weapon: Weapon.Staff,
    color: Color.Colorless,
  },
  {
    weapon: Weapon.Dagger,
    color: Color.Red,
  },
  {
    weapon: Weapon.Dagger,
    color: Color.Blue,
  },
  {
    weapon: Weapon.Dagger,
    color: Color.Green,
  },
  {
    weapon: Weapon.Dagger,
    color: Color.Colorless,
  },
];
