import { PairingWhereInput } from "./PairingWhereInput";
import { PairingOrderByInput } from "./PairingOrderByInput";

export type PairingFindManyArgs = {
  where?: PairingWhereInput;
  orderBy?: Array<PairingOrderByInput>;
  skip?: number;
  take?: number;
};
