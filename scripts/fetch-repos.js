import fs from 'fs';

const GITHUB_USERNAME = 'subhashsomarouthu';
const OUTPUT_PATH = './src/data/repos.json';
const AUTO_OUTPUT_PATH = './src/data/auto-projects.json';
const REQUIRED_TOPIC = process.env.PORTFOLIO_TOPIC || 'portfolio';

const toTitle = (name) =>
  name
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());

const inferCategory = (topics = [], language = '') => {
  const t = topics.map((x) => x.toLowerCase());
  if (t.some((x) => ['genai', 'nlp', 'llm', 'rag', 'gpt'].includes(x))) return 'GenAI / NLP';
  if (t.some((x) => ['ml', 'ai', 'deep-learning', 'computer-vision', 'cv'].includes(x))) return 'ML / AI';
  if (t.some((x) => ['data', 'analytics', 'analysis', 'dashboard', 'powerbi', 'tableau', 'sql'].includes(x))) {
    return 'Data Analysis';
  }
  if (['Python', 'Jupyter Notebook'].includes(language)) return 'ML / AI';
  return 'Data Analysis';
};

const inferTech = (topics = [], language = '') => {
  const tech = new Set();
  if (language) tech.add(language);
  topics.forEach((t) => tech.add(t.replace(/-/g, ' ')));
  if (tech.size === 0) tech.add('Project');
  return Array.from(tech).slice(0, 10);
};

async function fetchPortfolioMeta(repo, headers) {
  const res = await fetch(
    `https://api.github.com/repos/${GITHUB_USERNAME}/${repo}/contents/portfolio.json`,
    { headers }
  );
  if (!res.ok) return null;
  const data = await res.json();
  if (!data.content) return null;
  const decoded = Buffer.from(data.content, 'base64').toString('utf-8');
  return JSON.parse(decoded);
}

async function fetchRepos() {
  const headers = {
    'Accept': 'application/vnd.github+json, application/vnd.github.mercy-preview+json'
  };

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

  const baseRepos = repos
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

  const filtered = [];
  const autoProjects = [];
  for (const repo of baseRepos) {
    const hasTopic = (repo.topics || []).includes(REQUIRED_TOPIC);
    let meta = null;
    try {
      meta = await fetchPortfolioMeta(repo.name, headers);
    } catch {
      meta = null;
    }
    if (meta && meta.include === false) continue;
    if (!hasTopic && !meta) continue;

    filtered.push(repo);

    const category = meta?.category || inferCategory(repo.topics, repo.language);
    const tech = meta?.tech || inferTech(repo.topics, repo.language);
    const title = meta?.title || toTitle(repo.name);

    autoProjects.push({
      title,
      category,
      situation: meta?.situation || "Open-source project with real-world scope",
      task: meta?.task || "Build and deliver a working solution",
      action: meta?.action || "Implemented core features, validated results, and packaged for reuse",
      result: meta?.result || "Shipped a functional, documented project",
      description: meta?.description || repo.description || "Project built and maintained as part of a production-ready portfolio.",
      tech,
      metrics: meta?.metrics || {
        stars: String(repo.stars || 0),
        updated: repo.updatedAt ? repo.updatedAt.slice(0, 10) : "n/a",
        repo: repo.name
      },
      image: meta?.image || null,
      images: meta?.images || null,
      previewVideo: meta?.previewVideo || null,
      demoVideo: meta?.demoVideo || null,
      website: meta?.website || repo.homepage || null,
      github: repo.url,
    });
  }

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(filtered, null, 2));
  fs.writeFileSync(AUTO_OUTPUT_PATH, JSON.stringify(autoProjects, null, 2));
  console.log(`Fetched ${filtered.length} repos -> ${OUTPUT_PATH}`);
  console.log(`Generated ${autoProjects.length} auto projects -> ${AUTO_OUTPUT_PATH}`);
}

fetchRepos().catch(err => {
  console.warn('Failed to fetch repos:', err.message);
  // Don't fail the build — use stale data if it exists
});
