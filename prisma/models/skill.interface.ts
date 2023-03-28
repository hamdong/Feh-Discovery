import { SkillFamily } from './skill-family';
import { IStatChanges } from './stat-changes.interface';

export interface ISkill {
  skillFamily: SkillFamily;
  deltaSoft?: IStatChanges;
  deltaHard?: IStatChanges;
  deltaFlat?: IStatChanges;
  tier: number;
}
