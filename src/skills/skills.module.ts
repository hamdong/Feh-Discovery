import { Module } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { SkillsController } from './skills.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [SkillsController],
  providers: [SkillsService, PrismaClient],
})
export class SkillsModule {}
