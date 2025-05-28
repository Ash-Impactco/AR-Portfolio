import job from "./job";
import profile from "./profile";
import project from "./project";
import post from "./post";
import author from "./author";
import heroe from "./heroe";
import socialLink from "./socialLink";
import education from "./education";
import { table } from "./table";
import blockContent from "./blockContent";
import quiz from "./quiz";

export const schemaTypes = [
  profile,
  job,
  project,
  post,
  author,
  heroe,
  socialLink,
  education,

  // Reference types
  blockContent,
  table,
  quiz,
];
