import { Access } from "payload/types";
import { Roles } from "../collections/Users";
import { User } from "payload/generated-types";

export const isEditor: Access<any, User> = ({ req: { user } }) =>
  Boolean(user?.roles?.includes(Roles.editor.value));
