import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PairingServiceBase } from "./base/pairing.service.base";

@Injectable()
export class PairingService extends PairingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
