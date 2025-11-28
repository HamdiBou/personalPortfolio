import { useCallback, useEffect, useState } from 'react';

const normalizeRepo = (repo) => ({
  id: repo.id,
  title:
    repo.name
      .replace(/[-_]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' '),
  description: repo.description || 'Open-source experiment with thoughtful DX.',
  technologies: repo.language ? [repo.language] : [],
  link: repo.html_url,
  stars: repo.stargazers_count,
  forks: repo.forks_count,
  updated: repo.updated_at,
});

export function useGithubRepos(username, max = 6) {
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const fetchRepos = useCallback(async () => {
    if (!username) {
      return;
    }
    setStatus('loading');
    setError(null);

    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=${max * 2}`
      );

      if (!response.ok) {
        throw new Error('GitHub rate limited, try again soon.');
      }

      const data = await response.json();
      const curated = data
        .filter((repo) => !repo.fork)
        .slice(0, max)
        .map(normalizeRepo);

      setRepos(curated);
      setStatus('success');
    } catch (err) {
      setError(err.message || 'Unable to load repositories.');
      setStatus('error');
    }
  }, [username, max]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return { repos, status, error, refetch: fetchRepos };
}
