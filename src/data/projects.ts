export type ProjectCaseStudy = {
  overview: string;
  scope: string[];
  documentedNote?: string;
  sourcePage: number;
};

export type Project = {
  slug: string;
  title: string;
  displayTitle?: string;
  year?: string;
  category: string;
  description: string;
  featured?: boolean;
  caseStudy: ProjectCaseStudy;
};

// Case-study copy is based on the selected projects described on pages 11–12 of the supplied profile.
export const projects: Project[] = [
  {
    slug: "caliphate-air",
    title: "Caliphate Air — Digital Experience & Booking Platform",
    displayTitle: "Caliphate Air",
    year: "2026",
    category: "Digital product",
    description:
      "A high-end digital experience and booking platform, pairing functionality with destination-focused discovery.",
    featured: true,
    caseStudy: {
      overview:
        "UltraX Solutions designed and developed a high-end, fluid digital experience for Caliphate Air. The platform combines the booking experience with destination-focused content about the states served by the airline.",
      scope: [
        "Digital experience and booking platform.",
        "Destination content covering culture, tourism, activities, and places of interest across the states served.",
      ],
      sourcePage: 11,
    },
  },
  {
    slug: "nigeria-conference-hydrogen",
    title: "Nigeria Conference on Hydrogen",
    displayTitle: "Nigeria Conference on Hydrogen",
    year: "2024",
    category: "Event identity · Digital experience",
    description:
      "The official conference website and a suite of digital and visual communications for NCH.",
    featured: true,
    caseStudy: {
      overview:
        "UltraX developed the official conference website and delivered digital and visual communication assets for the Nigeria Conference on Hydrogen.",
      scope: [
        "Official conference website development.",
        "Event identity applications.",
        "Social media creatives and digital communications.",
        "Ongoing social media account management.",
      ],
      sourcePage: 11,
    },
  },
  {
    slug: "sixth-arcid",
    title: "6th African Regional Conference on Irrigation and Drainage",
    displayTitle: "6th African Regional Conference on Irrigation and Drainage",
    year: "2025",
    category: "Event identity · Environmental design",
    description:
      "An event identity extended across digital and physical touchpoints, including environmental design prototypes.",
    featured: true,
    caseStudy: {
      overview:
        "UltraX developed a visual identity system for the 6th African Regional Conference on Irrigation and Drainage, extending it across digital and physical touchpoints.",
      scope: [
        "Visual identity system for the conference.",
        "Social media and print assets.",
        "Environmental design prototypes for the stage, entrance walkway, registration area, and exhibition spaces.",
      ],
      sourcePage: 12,
    },
  },
  {
    slug: "volunteers4bat-monitoring-platform",
    title: "Election Monitoring Platform — Volunteers4BAT",
    year: "2023",
    category: "Monitoring platform · Data",
    description:
      "A dedicated election-monitoring situation room and platform for collecting, consolidating, and analysing election-related reports.",
    caseStudy: {
      overview:
        "For the 2023 Presidential Election, UltraX contributed to the development and operation of a dedicated election-monitoring situation room. Its platform supported structured collection, consolidation, and analysis of election-related reports and data.",
      scope: [
        "Contribution to the development and operation of a dedicated election-monitoring situation room.",
        "Structured collection, consolidation, and analysis of election-related reports and data.",
      ],
      documentedNote:
        "The profile says the reporting network reached over five million citizens and describes the centralized environment as supporting real-time monitoring and decision-making. It does not give a platform-user count or quantified election outcome.",
      sourcePage: 11,
    },
  },
  {
    slug: "world-bank-business-opportunities-seminar",
    title: "World Bank Group Business Opportunities Seminar",
    year: "2026",
    category: "Event identity",
    description:
      "Event visual identity and outdoor communication materials developed in partnership with CONLEK Media.",
    caseStudy: {
      overview:
        "In partnership with CONLEK Media, UltraX developed the visual identity and outdoor communication materials for the World Bank Group Business Opportunities Seminar.",
      scope: [
        "Event visual identity.",
        "Outdoor communication materials.",
      ],
      documentedNote:
        "The profile describes the creative direction as communicating the event’s purpose in a professional visual language for a business and development audience.",
      sourcePage: 11,
    },
  },
  {
    slug: "dahir-spices",
    title: "Dahir Spices — Social Media Optimization",
    year: "2023",
    category: "Digital media & growth",
    description:
      "Social media strategy, content production, publishing, promotion, and performance analytics for the brand.",
    caseStudy: {
      overview:
        "UltraX revitalized and optimized Dahir Spices’ social media presence through strategic planning, visual content production, publishing, promotion, and performance analytics.",
      scope: [
        "Strategic content planning.",
        "Visual content production and publishing.",
        "Promotion and performance analytics.",
      ],
      documentedNote:
        "The company profile reports a stronger digital presence, improved product visibility, and a more consistent communication system around the product portfolio. It provides no numerical performance data.",
      sourcePage: 12,
    },
  },
  {
    slug: "onga-creator-sourcing",
    title: "ONGA — Commercial Production & Creator Sourcing",
    category: "Campaigns · Creator sourcing",
    description:
      "Creator sourcing for a product commercial, matching the campaign objectives with audience and communication style.",
    caseStudy: {
      overview:
        "UltraX supported ONGA in identifying and sourcing a content creator for a product commercial, matching the creator’s audience and communication style to the campaign objectives.",
      scope: [
        "Creator identification and sourcing for a product commercial.",
        "Matching the creator’s audience and communication style to the campaign objectives.",
      ],
      documentedNote:
        "The profile says the engagement later extended into discussions about longer-term brand ambassador opportunities; it does not describe a resulting agreement.",
      sourcePage: 12,
    },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
