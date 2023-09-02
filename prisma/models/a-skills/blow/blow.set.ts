import { Description, Name } from '../../../enums';
import { ISkill } from '../../skill.interface';
import { deathBlow } from './blow.family';

const deathBlowSet: ISkill[] = [
  {
    name: Name.DeathBlow1,
    description: Description.DeathBlow1,
    skillFamily: deathBlow,
    deltaSoft: { atk: 2 },
  },
  {
    name: Name.DeathBlow2,
    description: Description.DeathBlow2,
    skillFamily: deathBlow,
    deltaSoft: { atk: 4 },
  },
  {
    name: Name.DeathBlow3,
    description: Description.DeathBlow3,
    skillFamily: deathBlow,
    deltaSoft: { atk: 6 },
  },
  {
    name: Name.DeathBlow4,
    description: Description.DeathBlow4,
    skillFamily: deathBlow,
    deltaSoft: { atk: 8 },
  },
];

export const blowSet: ISkill[] = [].concat(deathBlowSet);
