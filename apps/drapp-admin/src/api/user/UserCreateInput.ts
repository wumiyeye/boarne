import { MenteeCreateNestedManyWithoutUsersInput } from "./MenteeCreateNestedManyWithoutUsersInput";
import { MentorCreateNestedManyWithoutUsersInput } from "./MentorCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  ageGroup?: number | null;
  email?: string | null;
  firstName?: string | null;
  gender?: "Option1" | null;
  gpsLocation?: string | null;
  language?: string | null;
  lastName?: string | null;
  mentees?: MenteeCreateNestedManyWithoutUsersInput;
  mentors?: MentorCreateNestedManyWithoutUsersInput;
  password: string;
  roles: InputJsonValue;
  username: string;
};
