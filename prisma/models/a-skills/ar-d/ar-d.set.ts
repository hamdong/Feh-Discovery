import { ISkill } from 'prisma/models/skill.interface';
import { ardAtkDef, ardDefRes } from './ar-d.family';

const ardDefResSet: ISkill[] = [
  {
    skillFamily: ardDefRes,
    deltaSoft: { def: 4, res: 4 },
    statNotes: 'Based on number of defense structures',
    tier: 1,
  },
  {
    skillFamily: ardDefRes,
    deltaSoft: { def: 7, res: 7 },
    statNotes: 'Based on number of defense structures',
    tier: 2,
  },
  {
    skillFamily: ardDefRes,
    deltaSoft: { def: 10, res: 10 },
    statNotes: 'Based on number of defense structures',
    tier: 3,
  },
];

const ardAtkDefSet: ISkill[] = [
  {
    skillFamily: ardAtkDef,
    deltaSoft: { atk: 4, def: 4 },
    statNotes: 'Based on number of defense structures',
    tier: 1,
  },
  {
    skillFamily: ardAtkDef,
    deltaSoft: { atk: 7, def: 7 },
    statNotes: 'Based on number of defense structures',
    tier: 2,
  },
  {
    skillFamily: ardAtkDef,
    deltaSoft: { atk: 10, def: 10 },
    statNotes: 'Based on number of defense structures',
    tier: 3,
  },
];

export const ardSet: ISkill[] = [].concat(ardDefResSet, ardAtkDefSet);
