import type { Url } from "next/dist/shared/lib/router/router";

interface Project {
  id: string;
  name: string;
  description: string;
  repo: Url;
  demo?: Url;
  status?: "Under Development" | "Completed" | "On Hold" | "Planning" | "Other";
  techStack?: string;  // Added techStack as an optional property
}

export type { Project };

