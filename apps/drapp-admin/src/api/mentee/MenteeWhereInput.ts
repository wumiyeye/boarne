import { StringFilter } from "../../util/StringFilter";
import { PairingListRelationFilter } from "../pairing/PairingListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MenteeWhereInput = {
  id?: StringFilter;
  pairings?: PairingListRelationFilter;
  user?: UserWhereUniqueInput;
};
