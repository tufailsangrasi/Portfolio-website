export interface GithubRepo {
  name: string;
  description: string | null;
  language: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  pushed_at: string;
  topics: string[];
}

export interface PortfolioProject {
  name: string;
  description: string;
  githubUrl: string;
  language: string | null;
  topics: string[];
  stars: number;
  forks: number;
  updatedAt: string;
  live?: string;
  image?: string;
}
