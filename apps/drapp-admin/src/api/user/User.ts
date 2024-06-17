import { Mentee } from "../mentee/Mentee";
import { Mentor } from "../mentor/Mentor";
import { JsonValue } from "type-fest";

export type User = {
  ageGroup: number | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  gender?: "Option1" | null;
  gpsLocation: string | null;
  id: string;
  language: string | null;
  lastName: string | null;
  mentees?: Array<Mentee>;
  mentors?: Array<Mentor>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
