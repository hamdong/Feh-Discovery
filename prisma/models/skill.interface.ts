import { ISkillFamily } from './skill-family.interface';
import { IStatChanges } from './stat-changes.interface';

export interface ISkill {
  skillFamily: ISkillFamily;
  deltaSoft?: IStatChanges;
  deltaHard?: IStatChanges;
  deltaFlat?: IStatChanges;
  statNotes?: string;
  tier: number;
}
