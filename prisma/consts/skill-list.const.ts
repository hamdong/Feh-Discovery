import { atk, deathBlow, fierceStance } from '../models/skill-family';
import { ISkill } from '../models/skill.interface';

export const skills: ISkill[] = [
  {
    skillFamily: atk,
    deltaFlat: { atk: 1 },
    tier: 1,
  },
  {
    skillFamily: atk,
    deltaFlat: { atk: 2 },
    tier: 2,
  },
  {
    skillFamily: atk,
    deltaFlat: { atk: 3 },
    tier: 3,
  },
  {
    skillFamily: deathBlow,
    deltaSoft: { atk: 2 },
    tier: 1,
  },
  {
    skillFamily: deathBlow,
    deltaSoft: { atk: 4 },
    tier: 2,
  },
  {
    skillFamily: deathBlow,
    deltaSoft: { atk: 6 },
    tier: 3,
  },
  {
    skillFamily: deathBlow,
    deltaSoft: { atk: 8 },
    tier: 4,
  },
  {
    skillFamily: fierceStance,
    deltaSoft: { atk: 2 },
    tier: 1,
  },
  {
    skillFamily: fierceStance,
    deltaSoft: { atk: 4 },
    tier: 2,
  },
  {
    skillFamily: fierceStance,
    deltaSoft: { atk: 6 },
    tier: 3,
  },
];
