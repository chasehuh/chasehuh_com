import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const postsDirectory = path.join(__dirname, '../content/blog');
const logsDirectory = path.join(__dirname, '../content/logs');
const outputPath = path.join(__dirname, '../app/blog-data.json');

async function processPost(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);

  let contentEn = content;
  let contentKo = '';

  if (content.includes('<!-- LANG:KO -->')) {
    const parts = content.split('<!-- LANG:KO -->');
    contentEn = parts[0].trim();
    contentKo = parts[1]?.trim() || '';
  }

  const processedContent = await remark()
    .use(html)
    .process(contentEn);
  const htmlContent = processedContent.toString();

  let htmlContentKo;
  if (contentKo) {
    const processedContentKo = await remark()
      .use(html)
      .process(contentKo);
    htmlContentKo = processedContentKo.toString();
  }

  return {
    slug,
    title: data.title,
    titleKo: data.titleKo,
    date: data.date,
    author: data.author,
    content: contentEn,
    contentKo: contentKo,
    htmlContent: htmlContent,
    htmlContentKo: htmlContentKo,
  };
}

async function processLog(fileName) {
  const fullPath = path.join(logsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const slug = fileName.replace(/\.md$/, '');

  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(content);
  const htmlContent = processedContent.toString();

  return {
    slug,
    title: data.title || '',
    date: data.date,
    content: content,
    htmlContent: htmlContent,
  };
}

async function generateBlogData() {
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = await Promise.all(
    fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        return await processPost(slug);
      })
  );

  // Sort posts by date (newest first)
  posts.sort((a, b) => {
    if (a.date < b.date) return 1;
    if (a.date > b.date) return -1;
    return 0;
  });

  // Process logs
  let logs = [];
  let fullLogs = {};
  if (fs.existsSync(logsDirectory)) {
    const logFileNames = fs.readdirSync(logsDirectory);
    logs = await Promise.all(
      logFileNames
        .filter(fileName => fileName.endsWith('.md'))
        .map(async (fileName) => {
          return await processLog(fileName);
        })
    );

    // Sort logs by date (newest first)
    logs.sort((a, b) => {
      if (a.date < b.date) return 1;
      if (a.date > b.date) return -1;
      return 0;
    });

    fullLogs = Object.fromEntries(
      logs.map(log => [log.slug, log])
    );
  }

  // Create blog data object
  const blogData = {
    posts: posts.map(post => ({
      slug: post.slug,
      title: post.title,
      titleKo: post.titleKo,
      date: post.date,
      author: post.author,
    })),
    fullPosts: Object.fromEntries(
      posts.map(post => [post.slug, post])
    ),
    logs: logs.map(log => ({
      slug: log.slug,
      title: log.title,
      date: log.date,
    })),
    fullLogs: fullLogs,
  };

  // Write to JSON file
  fs.writeFileSync(outputPath, JSON.stringify(blogData, null, 2));
  console.log(`Generated blog data with ${posts.length} posts and ${logs.length} logs`);
}

generateBlogData().catch(console.error);
