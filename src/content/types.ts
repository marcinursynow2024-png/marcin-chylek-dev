export interface Project {
  title: string;
  description: string;
  tags: string[];
}

export interface SiteContent {
  lang: 'pl' | 'en';
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    projects: string;
    skills: string;
    contact: string;
  };
  hero: {
    badge: string;
    name: string;
    role: string;
    lead: string;
    ctaContact: string;
    ctaLinkedIn: string;
  };
  about: {
    title: string;
    paragraphs: string[];
    note: string;
  };
  projects: {
    title: string;
    items: Project[];
  };
  skills: {
    title: string;
    items: string[];
  };
  contact: {
    title: string;
    text: string;
    email: string;
  };
  footer: {
    location: string;
  };
}
