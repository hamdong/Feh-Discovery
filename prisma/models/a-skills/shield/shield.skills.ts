import { Description, Name } from '../../../enums';
import { ISkill } from '../../skill.interface';
import { granisShield, iotesShield, svalinnShield } from './shield.family';

const svalinnShieldSkills: ISkill[] = [
  {
    name: Name.SvalinnShield,
    description: Description.SvalinnShield,
    skillFamily: svalinnShield,
  },
];

const granisShieldSkills: ISkill[] = [
  {
    name: Name.GranisShield,
    description: Description.GranisShield,
    skillFamily: granisShield,
  },
];

const iotesShieldSkills: ISkill[] = [
  {
    name: Name.IotesShield,
    description: Description.IotesShield,
    skillFamily: iotesShield,
  },
];

export const shieldSkills: ISkill[] = [].concat(
  svalinnShieldSkills,
  granisShieldSkills,
  iotesShieldSkills,
);
