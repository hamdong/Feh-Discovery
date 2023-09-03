import * as skill from '../models';
import { ISkill } from '../models/skill.interface';

export const skills: ISkill[] = Object.values(skill).reduce(
  (acc, arr) => acc.concat(arr),
  [],
);
