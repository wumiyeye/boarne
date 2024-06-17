import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  ageGroup?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  gender?: SortOrder;
  gpsLocation?: SortOrder;
  id?: SortOrder;
  language?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
