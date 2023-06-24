import * as s from '../models';
import { ISkill } from '../models/skill.interface';

export const skills: ISkill[] = [].concat(
  s.ardSet,
  s.blowSet,
  s.flatStatSet,
  s.fortressSet,
  s.stanceSet,
  s.shieldSet,
);
