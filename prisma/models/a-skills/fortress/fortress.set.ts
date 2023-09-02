import { Description, Name } from '../../../enums';
import { ISkill } from '../../skill.interface';
import { fortressDef, fortressDefRes, fortressRes } from './fortress.family';

const fortressDefSet: ISkill[] = [
  {
    name: Name.FortressDef1,
    description: Description.FortressDef1,
    skillFamily: fortressDef,
    deltaFlat: { atk: -3, def: 3 },
  },
  {
    name: Name.FortressDef2,
    description: Description.FortressDef2,
    skillFamily: fortressDef,
    deltaFlat: { atk: -3, def: 4 },
  },
  {
    name: Name.FortressDef3,
    description: Description.FortressDef3,
    skillFamily: fortressDef,
    deltaFlat: { atk: -3, def: 5 },
  },
];

const fortressResSet: ISkill[] = [
  {
    name: Name.FortressRes1,
    description: Description.FortressRes1,
    skillFamily: fortressRes,
    deltaFlat: { atk: -3, res: 3 },
  },
  {
    name: Name.FortressRes2,
    description: Description.FortressRes2,
    skillFamily: fortressRes,
    deltaFlat: { atk: -3, res: 4 },
  },
  {
    name: Name.FortressRes3,
    description: Description.FortressRes3,
    skillFamily: fortressRes,
    deltaFlat: { atk: -3, res: 5 },
  },
];

const fortressDefResSet: ISkill[] = [
  {
    name: Name.FortressDefRes1,
    description: Description.FortressDefRes1,
    skillFamily: fortressDefRes,
    deltaFlat: { atk: -3, def: 3, res: 3 },
  },
  {
    name: Name.FortressDefRes2,
    description: Description.FortressDefRes2,
    skillFamily: fortressDefRes,
    deltaFlat: { atk: -3, def: 4, res: 4 },
  },
  {
    name: Name.FortressDefRes3,
    description: Description.FortressDefRes3,
    skillFamily: fortressDefRes,
    deltaFlat: { atk: -2, def: 6, res: 6 },
  },
];

export const fortressSet: ISkill[] = [].concat(
  fortressDefSet,
  fortressResSet,
  fortressDefResSet,
);
