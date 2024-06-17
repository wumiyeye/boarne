import { PairingUpdateManyWithoutMenteesInput } from "./PairingUpdateManyWithoutMenteesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MenteeUpdateInput = {
  pairings?: PairingUpdateManyWithoutMenteesInput;
  user?: UserWhereUniqueInput | null;
};
