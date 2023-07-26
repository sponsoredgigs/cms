import { CollectionConfig } from "payload/types";
import { isAdminOrEditor } from "../access/isAdminOrEditor";
import { lexicalRichTextField } from "payload-plugin-lexical";
import { isUrl } from "../validators/isUrl";

const Jobs: CollectionConfig = {
  slug: "jobs",
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
    {
      name: "level",
      type: "select",
      required: true,
      options: [
        {
          label: "Internship",
          value: "internship",
        },
        {
          label: "Entry Level",
          value: "entry-level",
        },
        {
          label: "Associate",
          value: "associate",
        },
        {
          label: "Mid-Senior Level",
          value: "mid-senior-level",
        },
        {
          label: "Director",
          value: "director",
        },
        {
          label: "Executive",
          value: "executive",
        },
        {
          label: "Other",
          value: "other",
        },
      ],
    },
    {
      name: "type",
      type: "select",
      required: true,
      options: [
        {
          label: "Full-Time",
          value: "full-time",
        },
        {
          label: "Part-Time",
          value: "part-time",
        },
        {
          label: "Contract",
          value: "contract",
        },
        {
          label: "Casual",
          value: "casual",
        },
        {
          label: "Temporary",
          value: "temporary",
        },
        {
          label: "Other",
          value: "other",
        },
      ],
    },
    {
      name: "industry",
      type: "select",
      required: true,
      options: [
        {
          label: "Information Technology",
          value: "information-technology",
        },
        {
          label: "Healthcare and Medical Services",
          value: "healthcare-and-medical-services",
        },
        {
          label: "Education and Training",
          value: "education-and-training",
        },
        {
          label: "Finance and Banking",
          value: "finance-and-banking",
        },
        {
          label: "Manufacturing and Production",
          value: "manufacturing-and-production",
        },
        {
          label: "Retail and Consumer Goods",
          value: "retail-and-consumer-goods",
        },
        {
          label: "Hospitality and Tourism",
          value: "hospitality-and-tourism",
        },
        {
          label: "Construction and Engineering",
          value: "construction-and-engineering",
        },
        {
          label: "Marketing and Advertising",
          value: "marketing-and-advertising",
        },
        {
          label: "Media and Entertainment",
          value: "media-and-entertainment",
        },
        {
          label: "Consulting and Professional Services",
          value: "consulting-and-professional-services",
        },
        {
          label: "Non-profit and Social Services",
          value: "non-profit-and-social-services",
        },
        {
          label: "Transportation and Logistics",
          value: "transportation-and-logistics",
        },
        {
          label: "Energy and Utilities",
          value: "energy-and-utilities",
        },
        {
          label: "Administration and Office Support",
          value: "administration-and-office-support",
        },
        {
          label: "Government and Public Administration",
          value: "government-and-public-administration",
        },
        {
          label: "Other",
          value: "other",
        },
      ],
    },
    {
      name: "url",
      type: "text",
      required: true,
      validate: isUrl,
    },
    lexicalRichTextField({
      name: "description",
    }),
    {
      name: "company",
      type: "text",
      required: true,
    },
    {
      name: "companyUrl",
      type: "text",
      required: true,
      validate: isUrl,
    },
    {
      name: "location",
      type: "text",
      required: true,
    },
    {
      name: "salary",
      type: "text",
    },
  ],
};

export default Jobs;
