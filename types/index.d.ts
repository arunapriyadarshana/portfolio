export enum TechCategory {
  Frontend = "frontend",
  Backend = "backend",
  Database = "database",
  Programming = "programming",
  Cloud = "cloud",
  Tool = "tool",
  None = "none",
}

// declare interface Technology {
//   id: string;
//   name: string;
//   icon: string;
//   order: number;
//   category: TechCategory;
// }

// declare interface Project {
//   id: string;
//   title: string;
//   subTitle?: string;
//   duration?: string;
//   description?: string;
//   links?: Link[];
//   img: string;
//   stack: Technology[];
//   role: string;
// }

// declare interface Education {
//   id: string;
//   title: string;
//   time: string;
//   name: string;
//   description: string;
//   other?: string;
// }

// declare interface Social {
//   $id: string;
//   name: string;
//   link: string;
//   icon: string;
// }

declare interface Technology {
  id: string; // UUID of the technology
  name: string; // Name of the technology
  icon: string; // URL for the technology's icon
  category: TechCategory; // Category of the technology (e.g., "database", "frontend")
  isVisible: boolean; // Whether the technology is visible
  order: number; // Order for displaying the technology
}

declare interface TechStack {
  projectId: string; // UUID of the project
  techId: string; // UUID of the technology
  tech: Technology; // Nested Tech object
}

declare interface Project {
  id: string; // UUID of the project
  title: string; // Title of the project
  subtitle: string; // Subtitle of the project
  duration: string; // Duration of the project
  description: string; // Description of the project
  links: string[]; // Array of project links
  img: string; // Image associated with the project
  role: string; // Role in the project
  techStack: TechStack[]; // Array of technologies used in the project (TechStack[])
}
