import { Mentor as TMentor } from "../api/mentor/Mentor";

export const MENTOR_TITLE_FIELD = "id";

export const MentorTitle = (record: TMentor): string => {
  return record.id?.toString() || String(record.id);
};
