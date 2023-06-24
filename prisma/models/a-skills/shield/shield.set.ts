import { ISkill } from 'prisma/models/skill.interface';
import { granisShield, iotesShield, svalinnShield } from './shield.family';

const svalinnShieldSet: ISkill[] = [
  {
    skillFamily: svalinnShield,
    tier: 1,
  },
];

const granisShieldSet: ISkill[] = [
  {
    skillFamily: granisShield,
    tier: 1,
  },
];

const iotesShieldSet: ISkill[] = [
  {
    skillFamily: iotesShield,
    tier: 1,
  },
];

export const shieldSet: ISkill[] = [].concat(
  svalinnShieldSet,
  granisShieldSet,
  iotesShieldSet,
);
