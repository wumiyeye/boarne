import { Module } from "@nestjs/common";
import { PairingModuleBase } from "./base/pairing.module.base";
import { PairingService } from "./pairing.service";
import { PairingController } from "./pairing.controller";
import { PairingResolver } from "./pairing.resolver";

@Module({
  imports: [PairingModuleBase],
  controllers: [PairingController],
  providers: [PairingService, PairingResolver],
  exports: [PairingService],
})
export class PairingModule {}
