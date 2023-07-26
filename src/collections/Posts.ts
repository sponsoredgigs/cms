import { CollectionConfig } from "payload/types";
import { isAdminOrEditor } from "../access/isAdminOrEditor";
import { lexicalRichTextField } from "payload-plugin-lexical";
import PostBanners from "./PostBanners";
import Admins, { Roles } from "./Users";

const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
  },
  access: {
    create: isAdminOrEditor,
    read: () => true,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    lexicalRichTextField({
      name: "content",
      required: true,
    }),
    {
      name: "banner",
      type: "upload",
      relationTo: PostBanners.slug,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "minutesToRead",
      type: "number",
      required: true,
    },
    {
      name: "author",
      type: "relationship",
      relationTo: Admins.slug,
      required: true,
      // Only editors should be selectable as an author
      filterOptions: () => {
        return {
          roles: {
            contains: Roles.editor.value,
          },
        };
      },
    },
  ],
};

export default Posts;
