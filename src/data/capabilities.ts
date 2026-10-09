export type Capability = {
  title: string;
  number: string;
  summary: string;
  services: string[];
};

export const capabilities: Capability[] = [
  {
    number: "01",
    title: "Digital products & experiences",
    summary: "Digital platforms that make information, services, and interactions easier to access.",
    services: [
      "Website design & development",
      "UI/UX design",
      "Booking & registration platforms",
      "CMS development",
      "Custom web applications",
      "Digital experience design",
      "Hosting, security & maintenance",
      "Analytics & tracking",
    ],
  },
  {
    number: "02",
    title: "Brand & visual communication",
    summary: "Visual systems that help organizations communicate consistently across digital and physical environments.",
    services: [
      "Brand identity",
      "Event & conference identity",
      "Campaign visual systems",
      "Social media design systems",
      "Environmental & outdoor design",
      "Print & digital communication",
      "Corporate & presentation design",
    ],
  },
  {
    number: "03",
    title: "Digital media & growth",
    summary: "Strategy, content, distribution, and performance measurement for a stronger digital presence.",
    services: [
      "Social media strategy",
      "Content strategy",
      "Content production",
      "Social media management",
      "Digital campaigns",
      "Paid promotion",
      "Performance analytics",
      "Social media optimization",
    ],
  },
  {
    number: "04",
    title: "Campaigns, creators & production",
    summary: "Creative talent and production resources connected to bring campaigns to life.",
    services: [
      "Commercial production",
      "Creator & influencer sourcing",
      "Creator campaigns",
      "Brand ambassador sourcing",
      "Creative direction",
      "Production management",
      "Campaign execution",
    ],
  },
  {
    number: "05",
    title: "Data, technology & intelligence",
    summary: "Systems and processes that help organizations collect, understand, and act on information.",
    services: [
      "Data collection & management",
      "Monitoring platforms",
      "Digital dashboards",
      "Campaign tracking",
      "Audience intelligence",
      "Reporting & analytics",
      "Custom digital systems",
    ],
  },
];
