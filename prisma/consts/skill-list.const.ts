import * as s from '../models';
import { ISkill } from '../models/skill.interface';

export const skills: ISkill[] = [].concat(
  s.ardSkills,
  s.blowSkills,
  s.flatStatSkills,
  s.fortressSkills,
  s.stanceSkills,
  s.shieldSkills,
);
