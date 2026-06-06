export type Job = {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: "Frontend" | "Backend" | "Fullstack";
  level: "Junior" | "Midweight" | "Senior";
  postedAt: string;
  contract: "Full Time" | "Part Time" | "Contract";
  location: "USA Only" | "Worldwide" | "Remote" | "UK Only";
  languages: string[];
  tools: string[];
};
