import { Description, Name } from 'prisma/enums';
import { ISkillFamily } from './skill-family.interface';
import { IStatChanges } from './stat-changes.interface';

export interface ISkill {
  name: Name;
  description: Description;
  skillFamily: ISkillFamily;
  deltaSoft?: IStatChanges;
  deltaHard?: IStatChanges;
  deltaFlat?: IStatChanges;
}
