import type { SiteContent } from './types';

export const content: SiteContent = {
  lang: 'en',
  meta: {
    title: 'Marcin Chyłek — Senior C# .NET Developer',
    description:
      'Senior C# .NET Developer / Team Lead. Enterprise systems: IoT, payment integrations, public sector. Azure, .NET 8, microservices.',
  },
  nav: {
    about: 'About',
    projects: 'Projects',
    skills: 'Technologies',
    contact: 'Contact',
  },
  hero: {
    badge: 'Open to B2B contracts',
    name: 'Marcin Chyłek',
    role: 'Senior C# .NET Developer / Team Lead',
    lead: '20 years in enterprise systems: corporate IoT, payment integrations, public sector. Currently building an AV/IoT platform for enterprises. SOLID, clean code, cloud architecture.',
    ctaContact: 'Get in touch',
    ctaLinkedIn: 'LinkedIn',
  },
  about: {
    title: 'About',
    paragraphs: [
      'Senior developer specializing in C#/.NET and Azure solutions. Currently building an audio-video device management platform for corporate IoT environments.',
      'Previously: Nordic payment integrations, customer portals, public-sector registration systems — always focused on multi-system integrations and code quality.',
      'Expertise: cloud architecture, microservices, cross-platform installers, CI/CD, technology PoCs, and automated testing.',
    ],
    note: 'My work speaks through the projects below — no employer list.',
  },
  projects: {
    title: 'Projects',
    items: [
      {
        title: 'AV/IoT Platform — audio-video devices',
        description:
          'Corporate IoT system for managing AV devices. UI layer integrated with business logic and local infrastructure plus Azure cloud. Cross-platform Windows/macOS, installers, UC integration (Teams). PoCs and E2E tests.',
        tags: ['.NET 8', 'Azure', 'IoT Hub', 'Cosmos DB', 'APIM', 'MAUI'],
      },
      {
        title: 'Cadastral tax loans — Ministry of State Treasury',
        description:
          'Integration of a system enabling citizens to apply for government loans to pay cadastral tax. Microservices architecture on Kubernetes, Kafka-based messaging, resilience with Polly.',
        tags: ['.NET 8', 'Kubernetes', 'Kafka', 'Polly', 'Microservices'],
      },
      {
        title: 'PSP Connector — payment transactions',
        description:
          'Processing transactions from Danish toll gates (bridges, ferries, parking) with integrations to payment systems and banks. Azure Functions, SQL Server reporting, CI/CD automation.',
        tags: ['.NET 6', 'Azure Functions', 'SQL Server', 'CI/CD'],
      },
      {
        title: 'MinKonto — customer portal',
        description:
          'Customer account management: accounts, sub-accounts, devices, billing plans, invoices. Notification module monitoring billing events with a React user interface.',
        tags: ['.NET 6', 'Azure', 'SQL Server', 'React'],
      },
      {
        title: 'Vehicle & Driver — public sector',
        description:
          'Vehicle registration and driving license systems for communication departments. Inter-department sync microservices, EV green plates, new regulations and structural changes support.',
        tags: ['C#', 'Microservices', 'REST', 'SQL Server', 'Azure'],
      },
    ],
  },
  skills: {
    title: 'Technologies',
    items: [
      'C#',
      '.NET 8',
      'ASP.NET Core',
      'Azure',
      'IoT Hub',
      'Cosmos DB',
      'APIM',
      'SQL Server',
      'REST',
      'Microservices',
      'Docker',
      'Kubernetes',
      'Kafka',
      'Polly',
      'RabbitMQ',
      'React',
      'MAUI',
      'CI/CD',
      'SOLID',
    ],
  },
  contact: {
    title: 'Contact',
    text: 'Open to B2B contracts and long-term engagements. Drop me a line — I reply within 24 hours.',
    email: 'marcin.ursynow.2024@gmail.com',
  },
  footer: {
    location: 'Warsaw, Poland',
  },
};
