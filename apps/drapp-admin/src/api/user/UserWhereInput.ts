import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MenteeListRelationFilter } from "../mentee/MenteeListRelationFilter";
import { MentorListRelationFilter } from "../mentor/MentorListRelationFilter";

export type UserWhereInput = {
  ageGroup?: IntNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  gender?: "Option1";
  gpsLocation?: StringNullableFilter;
  id?: StringFilter;
  language?: StringNullableFilter;
  lastName?: StringNullableFilter;
  mentees?: MenteeListRelationFilter;
  mentors?: MentorListRelationFilter;
  username?: StringFilter;
};
