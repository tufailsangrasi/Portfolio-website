import { useEffect, useState } from "react";
import { fetchPortfolioRepos } from "@/services/githubService";
import { PortfolioProject } from "@/types";

interface UseGithubReposResult {
  repos: PortfolioProject[];
  loading: boolean;
  error: string | null;
}

export default function useGithubRepos(): UseGithubReposResult {
  const [repos, setRepos] = useState<PortfolioProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetchPortfolioRepos(controller.signal)
      .then((data) => {
        setRepos(data);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        setError(err.message ?? "Failed to load projects from GitHub.");
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, []);

  return { repos, loading, error };
}
