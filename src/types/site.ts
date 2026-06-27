export type NavItem = {
  href: string;
  label: string;
};

export type HeroStat = {
  label: string;
  value: string;
};

export type Service = {
  title: string;
  description: string;
  bullets: string[];
};

export type ShowcaseItem = {
  title: string;
  category: string;
  image: string;
  alt: string;
  description: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export type InstagramItem = {
  href: string;
  image: string;
  alt: string;
  caption: string;
};

export type InstagramHighlight = {
  label: string;
  image: string;
};

export type InstagramProfile = {
  username: string;
  displayName: string;
  location: string;
  postsCount: string;
  followers: string;
  following: string;
  bio: string[];
  avatar: string;
  highlights: InstagramHighlight[];
};

export type SeoMeta = {
  title: string;
  description: string;
  path: string;
};
