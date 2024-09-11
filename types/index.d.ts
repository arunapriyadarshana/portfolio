export enum TechCategory {
  Frontend = "frontend",
  Backend = "backend",
  Database = "database",
  Programming = "programming",
  Cloud = "cloud",
  Tool = "tool",
  None = "none",
}

declare interface Technology {
  id: string;
  name: string;
  icon: string;
  order: number;
  category: TechCategory;
}

declare interface Project {
  id: string;
  title: string;
  subTitle?: string;
  duration?: string;
  description?: string;
  links?: Link[];
  img: string;
  stack: Technology[];
  role: string;
}

declare interface Education {
  id: string;
  title: string;
  time: string;
  name: string;
  description: string;
  other?: string;
}

declare interface Social {
  $id: string;
  name: string;
  link: string;
  icon: string;
}
