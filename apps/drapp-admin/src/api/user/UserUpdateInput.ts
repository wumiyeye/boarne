import { MenteeUpdateManyWithoutUsersInput } from "./MenteeUpdateManyWithoutUsersInput";
import { MentorUpdateManyWithoutUsersInput } from "./MentorUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  ageGroup?: number | null;
  email?: string | null;
  firstName?: string | null;
  gender?: "Option1" | null;
  gpsLocation?: string | null;
  language?: string | null;
  lastName?: string | null;
  mentees?: MenteeUpdateManyWithoutUsersInput;
  mentors?: MentorUpdateManyWithoutUsersInput;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
