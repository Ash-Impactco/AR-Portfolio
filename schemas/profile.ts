import { defineField, defineType } from "sanity";
import { BiUser } from "react-icons/bi";

export const profile = defineType({
  name: "profile",
  title: "Profile",
  type: "document",
  icon: BiUser,
  fields: [
    defineField({
      name: "fullName",
      title: "Full Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      description: "In one short sentence, what do you do?",
      validation: (Rule) => Rule.required().min(40).max(80),
    }),
    defineField({
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      description: "Upload a profile picture",
      options: {
        hotspot: true,
        metadata: ["lqip"],
      },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "shortBio",
      title: "Short Bio",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "fullBio",
      title: "Full Bio",
      type: "blockContent",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "resumeURL",
      title: "Upload Resume",
      type: "file",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [{ type: "reference", to: [{ type: "socialLink" }] }],
    }),
    defineField({
      name: "ventures",
      title: "Ventures",
      type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({
            name: "name",
            title: "Venture Name",
            type: "string",
            validation: (rule) => rule.required(),
          }),
          defineField({
            name: "description",
            title: "Description",
            type: "text",
            rows: 3,
          }),
          defineField({
            name: "startDate",
            title: "Start Date",
            type: "date",
          }),
          defineField({
            name: "website",
            title: "Website",
            type: "url",
          }),
        ],
      }],
    }),
  ],
});

export default profile;
