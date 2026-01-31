// Import pre-generated blog data
import blogData from '../blog-data.json';

export interface Post {
  slug: string;
  title: string;
  titleKo?: string;
  date: string;
  author?: string;
  content: string;
  contentKo?: string;
  htmlContent?: string;
  htmlContentKo?: string;
}

export interface LogSummary {
  slug: string;
  title: string;
  date: string;
}

export interface Log extends LogSummary {
  content: string;
  htmlContent?: string;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const post = (blogData.fullPosts as Record<string, Post>)[slug];
  return post || null;
}

export function getAllPosts(): Post[] {
  return blogData.posts as Post[];
}

export function getAllPostSlugs() {
  return blogData.posts.map(post => ({
    slug: post.slug,
  }));
}

export function getAllLogs(): LogSummary[] {
  return (blogData as unknown as { logs: LogSummary[] }).logs || [];
}

export function getAllLogSlugs() {
  return getAllLogs().map(log => ({
    date: log.slug,
  }));
}

export async function getLogByDate(dateSlug: string): Promise<Log | null> {
  const fullLogs = (blogData as unknown as { fullLogs: Record<string, Log> }).fullLogs || {};
  return fullLogs[dateSlug] || null;
}
