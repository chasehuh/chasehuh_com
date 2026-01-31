import { getAllPosts, getAllLogs } from "~/lib/markdown";
import { HomeContent } from "~/components/home-content";

export default function Index() {
  const posts = getAllPosts();
  const recentPosts = posts.slice(0, 3).map((p) => ({
    slug: p.slug,
    title: p.title,
    date: p.date,
  }));

  const logs = getAllLogs();
  const recentLogs = logs.slice(0, 3).map((l) => ({
    date: l.date,
    title: l.title,
  }));

  return <HomeContent recentPosts={recentPosts} recentLogs={recentLogs} />;
}
