export enum TechCategory {
  Frontend = "frontend",
  Backend = "backend",
  Database = "database",
  Programming = "programming",
  Cloud = "cloud",
  Tool = "tool",
  None = "none",
}

export interface Technology {
  id: string; // UUID
  name: string; // Name of the technology
  icon: string; // Icon representing the technology
  category: TechCategory; // Category of the technology, default to 'none'
  isVisible: boolean; // Visibility status of the technology
  order: number; // Order for displaying the technology, default to 5000
}
