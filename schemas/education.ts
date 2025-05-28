import { BiBuilding } from "react-icons/bi";

const education = {
  name: "education",
  title: "Education",
  type: "document",
  icon: BiBuilding,
  fields: [
    {
      name: "institution",
      title: "Institution Name",
      type: "string",
      description: "What is the name of the institution?",
    },
    {
      name: "degree",
      title: "Degree/Program",
      type: "string",
      description: "Enter the degree or program name. E.g: Master's in Computer Science",
    },
    {
      name: "logo",
      title: "Institution Logo",
      type: "image",
    },
    {
      name: "url",
      title: "Institution Website",
      type: "url",
    },
    {
      name: "description",
      title: "Achievements/Awards",
      type: "text",
      rows: 3,
      description: "Write about any achievements, awards, or distinctions received during this education",
    },
    {
      name: "startDate",
      title: "Start Date",
      type: "date",
    },
    {
      name: "endDate",
      title: "End Date",
      type: "date",
    },
  ],
};

export default education;
