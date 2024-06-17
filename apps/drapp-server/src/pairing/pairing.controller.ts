import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PairingService } from "./pairing.service";
import { PairingControllerBase } from "./base/pairing.controller.base";

@swagger.ApiTags("pairings")
@common.Controller("pairings")
export class PairingController extends PairingControllerBase {
  constructor(protected readonly service: PairingService) {
    super(service);
  }
}
