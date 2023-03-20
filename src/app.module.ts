import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SkillsController } from './skills/skills.controller';
import { SkillsModule } from './skills/skills.module';
import { SkillsService } from './skills/skills.service';

@Module({
  imports: [SkillsModule],
  controllers: [AppController, SkillsController],
  providers: [AppService, SkillsService, PrismaClient],
})
export class AppModule {}
