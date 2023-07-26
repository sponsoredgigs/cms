import { Access } from "payload/types";
import { Roles } from "../collections/Users";
import { User } from "payload/generated-types";

export const isAdminOrSelf: Access<any, User> = ({ req: { user } }) => {
  if (user?.roles?.includes(Roles.admin.value)) {
    return true;
  }

  return {
    id: {
      equals: user?.id,
    },
  };
};
