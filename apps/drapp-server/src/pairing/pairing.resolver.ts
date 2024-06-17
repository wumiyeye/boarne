import * as graphql from "@nestjs/graphql";
import { PairingResolverBase } from "./base/pairing.resolver.base";
import { Pairing } from "./base/Pairing";
import { PairingService } from "./pairing.service";

@graphql.Resolver(() => Pairing)
export class PairingResolver extends PairingResolverBase {
  constructor(protected readonly service: PairingService) {
    super(service);
  }
}
