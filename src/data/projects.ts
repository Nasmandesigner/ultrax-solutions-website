export type ProjectCaseStudy = {
  overview: string;
  scope: string[];
  documentedNote?: string;
  sourcePage: number;
};

export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export type ProjectReference = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  displayTitle?: string;
  year?: string;
  category: string;
  description: string;
  images?: ProjectImage[];
  reference?: ProjectReference;
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
    reference: {
      label: "Visit Caliphate Air",
      href: "https://caliphateair.com/",
    },
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
    category: "Conference website · Event identity · Digital communications",
    description:
      "The official conference website and a suite of digital and visual communications for NCH.",
    images: [
      {
        src: "/images/projects/nigeria-conference-hydrogen/optimized/nch-conference-key-art.webp",
        alt: "Landscape campaign artwork for the Nigeria Conference on Hydrogen, with the conference identity and event details.",
        width: 1280,
        height: 720,
        caption: "Conference key art",
      },
      {
        src: "/images/projects/nigeria-conference-hydrogen/optimized/nch-event-identity-applications.webp",
        alt: "Mockups of Nigeria Conference on Hydrogen branded materials and event communications arranged together.",
        width: 2000,
        height: 2500,
        caption: "Event identity applications · mock-up",
      },
      {
        src: "/images/projects/nigeria-conference-hydrogen/optimized/nch-masterclass-communication.webp",
        alt: "Digital masterclass announcement designed within the Nigeria Conference on Hydrogen identity system.",
        width: 1920,
        height: 1080,
        caption: "Masterclass communication",
      },
      {
        src: "/images/projects/nigeria-conference-hydrogen/optimized/nch-social-creative-set.webp",
        alt: "A grid of Nigeria Conference on Hydrogen social media creatives covering speakers, event information, and hydrogen topics.",
        width: 2000,
        height: 2000,
        caption: "Social media creative set",
      },
    ],
    reference: {
      label: "Open the Behance project",
      href: "https://www.behance.net/gallery/226151153/Hydrogen-Conference-NIGERIA?platform=direct",
    },
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
    images: [
      {
        src: "/images/projects/sixth-arcid/optimized/arcid-stage-prototype.webp",
        alt: "Stage design prototype for the 6th African Regional Conference on Irrigation and Drainage, showing branded screen panels on a central stage.",
        width: 2400,
        height: 959,
        caption: "Stage design prototype",
      },
      {
        src: "/images/projects/sixth-arcid/optimized/arcid-welcome-prototype.webp",
        alt: "Photomockup of a branded welcome structure at the conference entrance, shown in an outdoor setting.",
        width: 2400,
        height: 1801,
        caption: "Entrance welcome prototype",
      },
      {
        src: "/images/projects/sixth-arcid/optimized/arcid-registration-point-prototype.webp",
        alt: "Registration counter and conference identity shown as an environmental design prototype.",
        width: 2400,
        height: 1600,
        caption: "Registration point prototype",
      },
      {
        src: "/images/projects/sixth-arcid/optimized/arcid-pillars-signage-prototype.webp",
        alt: "Conference wayfinding and branded pillar signage visualised along an outdoor arrival route.",
        width: 2400,
        height: 1600,
        caption: "Arrival signage prototype",
      },
      {
        src: "/images/projects/sixth-arcid/optimized/arcid-conference-banner.webp",
        alt: "Digital banner for the 6th African Regional Conference on Irrigation and Drainage in Abuja, 2025.",
        width: 1920,
        height: 1080,
        caption: "Conference identity banner",
      },
    ],
    reference: {
      label: "Visit the official conference site",
      href: "https://6arc2025.nincid.org.ng/",
    },
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
    category: "Event identity · Outdoor communication",
    description:
      "Event visual identity and outdoor communication materials developed in partnership with CONLEK Media.",
    images: [
      {
        src: "/images/projects/world-bank-business-opportunities-seminar/optimized/stage-visualization.jpg",
        alt: "Stage design visualization for the World Bank Group Business Opportunities Seminar, with branded panels and a central event stage.",
        width: 3000,
        height: 1688,
        caption: "Stage design visualization",
      },
      {
        src: "/images/projects/world-bank-business-opportunities-seminar/optimized/media-wall-visualization.jpg",
        alt: "Media wall visualization for the World Bank Group Business Opportunities Seminar, using the event's blue visual identity and globe motif.",
        width: 1920,
        height: 1080,
        caption: "Media wall visualization",
      },
      {
        src: "/images/projects/world-bank-business-opportunities-seminar/optimized/event-identity-cover.jpg",
        alt: "Blue event identity cover artwork for World Bank Global Business Outreach, proposed by CONLEK Media.",
        width: 1920,
        height: 2356,
        caption: "Event identity cover artwork",
      },
      {
        src: "/images/projects/world-bank-business-opportunities-seminar/optimized/welcome-graphic.jpg",
        alt: "Welcome graphic for the World Bank Group Business Opportunities Seminar, featuring the Procurement for Development identity.",
        width: 1920,
        height: 1080,
        caption: "Welcome graphic",
      },
    ],
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
    reference: {
      label: "View Dahir Spices on Instagram",
      href: "https://www.instagram.com/dahirspices/",
    },
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

const selectedProjectSlugs = [
  "world-bank-business-opportunities-seminar",
  "nigeria-conference-hydrogen",
  "sixth-arcid",
  "caliphate-air",
  "dahir-spices",
];

export const selectedProjects = selectedProjectSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is Project => Boolean(project));

export const additionalProjects = projects.filter(
  (project) => !selectedProjectSlugs.includes(project.slug),
);

export const portfolioProjects = [...selectedProjects, ...additionalProjects];
