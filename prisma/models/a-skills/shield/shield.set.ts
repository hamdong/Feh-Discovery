import { Description, Name } from '../../../enums';
import { ISkill } from '../../skill.interface';
import { granisShield, iotesShield, svalinnShield } from './shield.family';

const svalinnShieldSet: ISkill[] = [
  {
    name: Name.SvalinnShield,
    description: Description.SvalinnShield,
    skillFamily: svalinnShield,
  },
];

const granisShieldSet: ISkill[] = [
  {
    name: Name.GranisShield,
    description: Description.GranisShield,
    skillFamily: granisShield,
  },
];

const iotesShieldSet: ISkill[] = [
  {
    name: Name.IotesShield,
    description: Description.IotesShield,
    skillFamily: iotesShield,
  },
];

export const shieldSet: ISkill[] = [].concat(
  svalinnShieldSet,
  granisShieldSet,
  iotesShieldSet,
);
