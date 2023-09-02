import { Description, Name } from '../../../enums';
import { ISkill } from '../../skill.interface';
import { fierceStance } from './stance.family';

const fierceStanceSet: ISkill[] = [
  {
    name: Name.FierceStance1,
    description: Description.FierceStance1,
    skillFamily: fierceStance,
    deltaSoft: { atk: 2 },
  },
  {
    name: Name.FierceStance2,
    description: Description.FierceStance2,
    skillFamily: fierceStance,
    deltaSoft: { atk: 4 },
  },
  {
    name: Name.FierceStance3,
    description: Description.FierceStance3,
    skillFamily: fierceStance,
    deltaSoft: { atk: 6 },
  },
];

export const stanceSet: ISkill[] = [].concat(fierceStanceSet);
