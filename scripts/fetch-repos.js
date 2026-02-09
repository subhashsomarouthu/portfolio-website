import fs from 'fs';

const GITHUB_USERNAME = 'subhashsomarouthu';
const OUTPUT_PATH = './src/data/repos.json';

async function fetchRepos() {
  const headers = { 'Accept': 'application/vnd.github+json' };

  // Use token if available (build environment), fall back to unauthenticated
  if (process.env.GITHUB_TOKEN) {
    headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100&type=owner`,
    { headers }
  );

  if (!res.ok) {
    console.warn(`GitHub API returned ${res.status}. Using existing repos.json if available.`);
    return;
  }

  const repos = await res.json();

  const filtered = repos
    .filter(r => !r.fork && !r.archived)
    .map(r => ({
      name: r.name,
      description: r.description,
      url: r.html_url,
      homepage: r.homepage,
      language: r.language,
      stars: r.stargazers_count,
      topics: r.topics || [],
      updatedAt: r.updated_at,
      createdAt: r.created_at,
    }))
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(filtered, null, 2));
  console.log(`Fetched ${filtered.length} repos -> ${OUTPUT_PATH}`);
}

fetchRepos().catch(err => {
  console.warn('Failed to fetch repos:', err.message);
  // Don't fail the build — use stale data if it exists
});
