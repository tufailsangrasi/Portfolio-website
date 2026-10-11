import { GithubRepo, PortfolioProject } from "@/types";

const GITHUB_USERNAME =
  import.meta.env.VITE_GITHUB_USERNAME ?? "tufailsangrasi";

const SEARCH_URL = `https://api.github.com/search/repositories?q=user:${GITHUB_USERNAME}+topic:portfolio&sort=updated&order=desc&per_page=50`;

interface CacheEntry {
  data: PortfolioProject[];
  timestamp: number;
}

const CACHE_TTL = 5 * 60 * 1000; 
let cache: CacheEntry | null = null;

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function repoToProject(repo: GithubRepo): PortfolioProject {
  return {
    name: repo.name,
    description: repo.description ?? "No description available.",
    githubUrl: repo.html_url,
    language: repo.language,
    topics: repo.topics,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    updatedAt: repo.pushed_at || repo.updated_at,
    live: repo.homepage || undefined,
  };
}

export async function fetchPortfolioRepos(
  signal?: AbortSignal,
): Promise<PortfolioProject[]> {
  
  if (cache && Date.now() - cache.timestamp < CACHE_TTL) {
    return cache.data;
  }

  const res = await fetch(SEARCH_URL, {
    signal,
    headers: {
      Accept: "application/vnd.github+json",
    },
  });

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
  }

  const json = await res.json();
  const repos: GithubRepo[] = json.items ?? [];
  const projects = repos.map(repoToProject);

  cache = { data: projects, timestamp: Date.now() };

  return projects;
}
