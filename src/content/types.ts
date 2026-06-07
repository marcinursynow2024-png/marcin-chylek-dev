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
    photoAlt: string;
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
    nipLabel: string;
    regonLabel: string;
  };
  business: {
    name: string;
    nip: string;
    regon: string;
    address: string;
    city: string;
  };
  footer: {
    nipLabel: string;
    regonLabel: string;
  };
}
