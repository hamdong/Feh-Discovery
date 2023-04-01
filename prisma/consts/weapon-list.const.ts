import { Color } from "../enums/color.enum";
import { Weapon } from "../enums/weapon.enum";
import { IWeaponType } from "../models/weapon-type.interface";

export const weapons: IWeaponType[] = [
  {
    weapon: Weapon.Sword,
    color: Color.Red,
  },
  {
    weapon: Weapon.Staff,
    color: Color.Colorless,
  }
];
