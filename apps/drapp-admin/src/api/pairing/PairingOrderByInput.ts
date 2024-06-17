import { SortOrder } from "../../util/SortOrder";

export type PairingOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  menteeId?: SortOrder;
  mentorId?: SortOrder;
  pairedAt?: SortOrder;
  updatedAt?: SortOrder;
};
