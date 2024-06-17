import { PairingCreateNestedManyWithoutMenteesInput } from "./PairingCreateNestedManyWithoutMenteesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MenteeCreateInput = {
  pairings?: PairingCreateNestedManyWithoutMenteesInput;
  user?: UserWhereUniqueInput | null;
};
