import { Access } from "payload/types";
import { Roles } from "../collections/Users";
import { User } from "payload/generated-types";

export const isAdminOrEditor: Access<any, User> = ({ req: { user } }) =>
  Boolean(user?.roles?.includes(Roles.admin.value)) ||
  Boolean(user?.roles?.includes(Roles.editor.value));
