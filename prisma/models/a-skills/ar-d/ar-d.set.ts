import { Description, Name } from '../../../enums';
import { ISkill } from '../../skill.interface';
import { ardAtkDef, ardDefRes } from './ar-d.family';

const ardDefResSet: ISkill[] = [
  {
    name: Name.ARDDefRes1,
    description: Description.ARDDefRes1,
    skillFamily: ardDefRes,
    deltaSoft: { def: 4, res: 4 },
  },
  {
    name: Name.ARDDefRes2,
    description: Description.ARDDefRes2,
    skillFamily: ardDefRes,
    deltaSoft: { def: 7, res: 7 },
  },
  {
    name: Name.ARDDefRes3,
    description: Description.ARDDefRes3,
    skillFamily: ardDefRes,
    deltaSoft: { def: 10, res: 10 },
  },
];

const ardAtkDefSet: ISkill[] = [
  {
    name: Name.ARDAtkDef1,
    description: Description.ARDAtkDef1,
    skillFamily: ardAtkDef,
    deltaSoft: { atk: 4, def: 4 },
  },
  {
    name: Name.ARDAtkDef2,
    description: Description.ARDAtkDef2,
    skillFamily: ardAtkDef,
    deltaSoft: { atk: 7, def: 7 },
  },
  {
    name: Name.ARDAtkDef3,
    description: Description.ARDAtkDef3,
    skillFamily: ardAtkDef,
    deltaSoft: { atk: 10, def: 10 },
  },
];

export const ardSet: ISkill[] = [].concat(ardDefResSet, ardAtkDefSet);
