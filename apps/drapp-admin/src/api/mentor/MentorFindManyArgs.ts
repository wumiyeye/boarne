import { MentorWhereInput } from "./MentorWhereInput";
import { MentorOrderByInput } from "./MentorOrderByInput";

export type MentorFindManyArgs = {
  where?: MentorWhereInput;
  orderBy?: Array<MentorOrderByInput>;
  skip?: number;
  take?: number;
};
