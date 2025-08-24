export interface Project {
  id: number;              // unique numeric ID
  title: string;           // project name
  description: string;     // short summary
  tech: string[];          // list of main technologies used
  github?: string;          // GitHub repo URL
  demo?: string;           // live demo URL
}