import { PairingUpdateManyWithoutMentorsInput } from "./PairingUpdateManyWithoutMentorsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MentorUpdateInput = {
  pairings?: PairingUpdateManyWithoutMentorsInput;
  user?: UserWhereUniqueInput | null;
};
