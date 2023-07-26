import { S3UploadCollectionConfig } from "payload-s3-upload";

const bucketName = "sponsoredgigs-media";
const folderName = "post-banners";

const PostBanners: S3UploadCollectionConfig = {
  slug: "post-banners",
  admin: {
    hidden: true,
  },
  upload: {
    staticURL: "/post-banners",
    staticDir: "post-banners",
    disableLocalStorage: true,
    s3: {
      bucket: "sponsoredgigs-media",
      prefix: folderName,
      commandInput: {
        ACL: "public-read",
      },
    },
    adminThumbnail: ({ doc }) =>
      `https://${bucketName}.s3.${process.env.PAYLOAD_PUBLIC_AWS_REGION}.amazonaws.com/${folderName}/${doc.filename}`,
  },
  fields: [
    {
      name: "url",
      type: "text",
      access: {
        create: () => false,
      },
      admin: {
        disabled: true,
      },
      hooks: {
        afterRead: [
          ({ data: doc }) =>
            `https://${bucketName}.s3.${process.env.PAYLOAD_PUBLIC_AWS_REGION}.amazonaws.com/${folderName}/${doc.filename}`,
        ],
      },
    },
  ],
};

export default PostBanners;
