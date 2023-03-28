import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class SkillsService {
  constructor(private readonly prisma: PrismaClient) {}

  async findAll() {
    const skills = await this.prisma.skill.findMany({
      include: {
        cond: {
          select: {
            target: true,
            action: true,
          },
        },
        effect: {
          select: {
            description: true,
            deltaSoft: true,
            deltaHard: true,
            deltaFlat: true,
          },
        },
      },
    });

    const mapped = skills.map((skill) => ({
      ...skill,
      effect: skill.effect.map((effect) => ({
        ...effect,
        deltaSoft: JSON.parse(effect.deltaSoft),
        deltaHard: JSON.parse(effect.deltaHard),
        deltaFlat: JSON.parse(effect.deltaFlat),
      })),
    }));
    return mapped;
  }

  async findByName(name: string) {
    return `This action returns a skill by its name`;
  }

  findOne(id: number) {
    return `This action returns a #${id} skill`;
  }
}
