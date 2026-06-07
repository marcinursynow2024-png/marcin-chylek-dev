import type { SiteContent } from './types';

export const content: SiteContent = {
  lang: 'pl',
  meta: {
    title: 'Marcin Chyłek — Senior C# .NET Developer',
    description:
      'Senior C# .NET Developer / Team Lead. Systemy enterprise: IoT, integracje płatnicze, sektor publiczny. Azure, .NET 8, mikroserwisy.',
  },
  nav: {
    about: 'O mnie',
    projects: 'Realizacje',
    skills: 'Technologie',
    contact: 'Kontakt',
  },
  hero: {
    badge: 'Dostępny na B2B',
    name: 'Marcin Chyłek',
    role: 'Senior C# .NET Developer / Team Lead',
    lead: '20 lat w systemach enterprise: IoT korporacyjny, integracje płatnicze, sektor publiczny. Obecnie platforma AV/IoT dla korporacji. SOLID, clean code, architektura chmurowa.',
    ctaContact: 'Skontaktuj się',
    ctaLinkedIn: 'LinkedIn',
  },
  about: {
    title: 'O mnie',
    paragraphs: [
      'Senior developer specjalizujący się w C#/.NET i rozwiązaniach Azure. Obecnie rozwijam platformę do obsługi urządzeń audio-wideo w środowiskach korporacyjnych IoT.',
      'Wcześniej: integracje płatnicze w Skandynawii, portale klienta, systemy rejestracyjne dla sektora publicznego — zawsze z naciskiem na integracje wielosystemowe i jakość kodu.',
      'Specjalizacja: architektura chmurowa, mikroserwisy, instalatory cross-platform, CI/CD, PoC-y technologiczne i testy automatyczne.',
    ],
    note: 'O mnie mówią realizacje poniżej — bez listy pracodawców.',
  },
  projects: {
    title: 'Realizacje',
    items: [
      {
        title: 'Platforma AV/IoT — urządzenia audio-wideo',
        description:
          'System zarządzania urządzeniami AV w środowiskach korporacyjnych IoT. Warstwa UI, integracja z logiką biznesową i infrastrukturą lokalną oraz chmurą Azure. Cross-platform Windows/macOS, instalatory, integracja UC (Teams). PoC-y i testy E2E.',
        tags: ['.NET 8', 'Azure', 'IoT Hub', 'Cosmos DB', 'APIM', 'MAUI'],
      },
      {
        title: 'Pożyczki na podatek katastralny — Ministerstwo Skarbu Państwa',
        description:
          'Integracja systemu umożliwiającego obywatelom składanie wniosków o pożyczkę rządową na spłatę podatku katastralnego. Architektura mikroserwisowa w Kubernetes, komunikacja oparta o Kafka, odporność z Polly.',
        tags: ['.NET 8', 'Kubernetes', 'Kafka', 'Polly', 'Mikroserwisy'],
      },
      {
        title: 'PSP Connector — transakcje płatnicze',
        description:
          'Przetwarzanie transakcji z duńskich bramek płatniczych (mosty, promy, parkingi) z integracją systemów płatniczych i banków. Azure Functions, raportowanie w SQL Server, automatyzacja CI/CD.',
        tags: ['.NET 6', 'Azure Functions', 'SQL Server', 'CI/CD'],
      },
      {
        title: 'MinKonto — portal klienta',
        description:
          'Zarządzanie kontem klienta: konta, subkonta, urządzenia, plany płatnicze, faktury. Moduł powiadomień z monitorowaniem zdarzeń billingowych i interfejsem użytkownika w React.',
        tags: ['.NET 6', 'Azure', 'SQL Server', 'React'],
      },
      {
        title: 'Pojazd & Kierowca — sektor publiczny',
        description:
          'Systemy rejestracji pojazdów i praw jazdy dla wydziałów komunikacji. Mikroserwisy synchronizacji między wydziałami, zielone tablice EV, obsługa nowych przepisów i zmian konstrukcyjnych.',
        tags: ['C#', 'Mikroserwisy', 'REST', 'SQL Server', 'Azure'],
      },
    ],
  },
  skills: {
    title: 'Technologie',
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
    title: 'Kontakt',
    text: 'Otwarty na współpracę B2B i projekty długoterminowe. Napisz — odpowiadam w ciągu 24h.',
    email: 'marcin.ursynow.2024@gmail.com',
  },
  footer: {
    location: 'Warszawa, Polska',
  },
};
