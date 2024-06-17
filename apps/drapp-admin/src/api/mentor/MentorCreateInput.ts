import { PairingCreateNestedManyWithoutMentorsInput } from "./PairingCreateNestedManyWithoutMentorsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MentorCreateInput = {
  pairings?: PairingCreateNestedManyWithoutMentorsInput;
  user?: UserWhereUniqueInput | null;
};
