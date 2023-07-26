import { Access, FieldAccess } from "payload/types";
import { Roles } from "../collections/Users";
import { User } from "payload/generated-types";

export const isAdmin: Access<any, User> = ({ req: { user } }) =>
  Boolean(user?.roles?.includes(Roles.admin.value));

export const isAdminFieldLevel: FieldAccess<{ id: string }, unknown, User> = ({
  req: { user },
}) => Boolean(user?.roles?.includes(Roles.admin.value));
