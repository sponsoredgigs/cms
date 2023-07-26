import { S3Client } from "@aws-sdk/client-s3";
import { buildConfig } from "payload/config";
import path from "path";
import s3Upload from "payload-s3-upload";
import Users from "./collections/Users";
import Posts from "./collections/Posts";
import PostBanners from "./collections/PostBanners";
import Avatars from "./collections/Avatars";
import Attachments from "./collections/Attachments";
import { LexicalPlugin } from "payload-plugin-lexical";
import Jobs from "./collections/Jobs";

export default buildConfig({
  serverURL: "http://localhost:3000",
  admin: {
    user: Users.slug,
  },
  collections: [Attachments, Avatars, Jobs, Posts, PostBanners, Users],
  plugins: [
    s3Upload(
      new S3Client({
        region: process.env.PAYLOAD_PUBLIC_AWS_REGION,
        credentials: {
          accessKeyId: process.env.AWS_KEY,
          secretAccessKey: process.env.AWS_SECRET,
        },
      })
    ),
    LexicalPlugin({}),
  ],
  email: {
    transportOptions: {
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    },
    fromName: process.env.MAIL_FROM_NAME,
    fromAddress: process.env.MAIL_FROM_ADDRESS,
  },
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
});
