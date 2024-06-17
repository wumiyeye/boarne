import { Mentee } from "../mentee/Mentee";
import { Mentor } from "../mentor/Mentor";

export type Pairing = {
  createdAt: Date;
  id: string;
  mentee?: Mentee | null;
  mentor?: Mentor | null;
  pairedAt: Date | null;
  updatedAt: Date;
};
