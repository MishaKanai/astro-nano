import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Misha Kanai",
  EMAIL: "misha.a.kanai@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 1,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Nano is a minimal and lightweight blog and portfolio.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work and Education",
  DESCRIPTION: "Where I have worked and studied",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects, with links to repositories and demos.",
};

export const BJJ: Metadata = {
  TITLE: "BJJ",
  DESCRIPTION: "Brazilian Jiu Jitsu",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/MishaKanai",
  },
];
