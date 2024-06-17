import { Module } from "@nestjs/common";
import { MentorModuleBase } from "./base/mentor.module.base";
import { MentorService } from "./mentor.service";
import { MentorController } from "./mentor.controller";
import { MentorResolver } from "./mentor.resolver";

@Module({
  imports: [MentorModuleBase],
  controllers: [MentorController],
  providers: [MentorService, MentorResolver],
  exports: [MentorService],
})
export class MentorModule {}
