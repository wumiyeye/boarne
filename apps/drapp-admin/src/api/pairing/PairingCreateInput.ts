import { MenteeWhereUniqueInput } from "../mentee/MenteeWhereUniqueInput";
import { MentorWhereUniqueInput } from "../mentor/MentorWhereUniqueInput";

export type PairingCreateInput = {
  mentee?: MenteeWhereUniqueInput | null;
  mentor?: MentorWhereUniqueInput | null;
  pairedAt?: Date | null;
};
