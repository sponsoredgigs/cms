import { CollectionConfig } from "payload/types";
import { isAdmin, isAdminFieldLevel } from "../access/isAdmin";
import Avatars from "./Avatars";
import { isAdminOrSelf } from "../access/isAdminOrSelf";

export const Roles = {
  admin: {
    label: "Admin",
    value: "admin",
  },
  editor: {
    label: "Editor",
    value: "editor",
  },
} as const;

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "fullName",
    defaultColumns: ["fullName", "email", "bio", "roles"],
  },
  access: {
    create: isAdmin,
    read: ({ req: { user } }) => {
      // Admins can always read everything in the collection
      if (user?.roles?.includes(Roles.admin.value)) {
        return true;
      }

      // Only editors should be publicly readable from the APIs
      return {
        roles: {
          contains: Roles.editor.value,
        },
      };
    },
    update: isAdminOrSelf,
    delete: isAdminOrSelf,
    unlock: () => true,
  },
  fields: [
    {
      name: "fullName",
      type: "text",
      required: true,
    },
    {
      name: "bio",
      type: "text",
      required: true,
    },
    {
      name: "avatar",
      type: "upload",
      relationTo: Avatars.slug,
    },
    {
      name: "roles",
      type: "select",
      // Save this field to JWT so we can use from `req.user`
      saveToJWT: true,
      hasMany: true,
      access: {
        // Only admins can create or update this field
        create: isAdminFieldLevel,
        update: isAdminFieldLevel,
      },
      defaultValue: [Roles.editor.value],
      options: [Roles.admin, Roles.editor],
    },
  ],
};

export default Users;
