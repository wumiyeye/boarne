import { StringFilter } from "../../util/StringFilter";
import { MenteeWhereUniqueInput } from "../mentee/MenteeWhereUniqueInput";
import { MentorWhereUniqueInput } from "../mentor/MentorWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type PairingWhereInput = {
  id?: StringFilter;
  mentee?: MenteeWhereUniqueInput;
  mentor?: MentorWhereUniqueInput;
  pairedAt?: DateTimeNullableFilter;
};
