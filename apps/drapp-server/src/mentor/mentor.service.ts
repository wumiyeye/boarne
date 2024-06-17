import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MentorServiceBase } from "./base/mentor.service.base";

@Injectable()
export class MentorService extends MentorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
