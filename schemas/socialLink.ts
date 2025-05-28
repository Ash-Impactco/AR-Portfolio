import { defineField } from "sanity";

const socialLink = {
  name: "socialLink",
  title: "Social Link",
  type: "document",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      description: "Enter the icon name (e.g., 'linkedin', 'github', 'twitter')",
    }),
  ],
};

export default socialLink;
