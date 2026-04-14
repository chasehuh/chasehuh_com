import Link from "next/link";
import { ExperienceList } from "~/components/experience-list";
import { AwardsList } from "~/components/awards-list";

interface PostSummary {
  slug: string;
  title: string;
  date: string;
}

interface LogSummary {
  slug: string;
  date: string;
  title: string;
  updatedAt?: string;
}

function isRecent(dateStr: string): boolean {
  const logDate = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - logDate.getTime();
  const diffDays = diffMs / (1000 * 60 * 60 * 24);
  return diffDays <= 3 && diffDays >= 0;
}

export function HomeContent({
  recentPosts,
  recentLogs,
}: {
  recentPosts: PostSummary[];
  recentLogs: LogSummary[];
}) {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-8">Chaewon (Chase) Huh</h1>

      <p className="text-[15px] leading-[1.8]">
        cofounder at{" "}
        <a href="https://sume.so/about" className="underline hover:no-underline">
          sume
        </a>
      </p>

      <p className="text-[15px] leading-[1.8] mb-8">
        contact me via{" "}
        <a
          href="mailto:chase@sumelabs.com"
          className="underline hover:no-underline"
        >
          email
        </a>{" "}
        <span>, </span>
        <a
          href="https://github.com/chasehuh"
          className="underline hover:no-underline"
        >
          github
        </a>{" "}
        <span>, </span>
        <a
          href="https://x.com/chaewonhuh_me"
          className="underline hover:no-underline"
        >
          x.com
        </a>
      </p>

      <div style={{ marginTop: "48px" }}>
        <div style={{ marginBottom: "64px" }}>
          <p className="text-[15px] leading-[1.8] mb-4">before sume, i worked as</p>
          <ExperienceList />
        </div>

        <div style={{ marginBottom: "64px" }}>
          <p className="text-[15px] leading-[1.8] mb-4">I studied at,</p>
          <div className="text-[15px] leading-[1.8]">
            • BS, POSTECH (24.03 - 24.07)
            <div style={{ marginLeft: "40px", marginTop: "12px" }}>
              <ul className="list-disc list-outside ml-5 space-y-2">
                <li>dropped out after the first semester</li>
              </ul>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: "64px" }}>
          <p className="text-[15px] leading-[1.8] mb-4">I won,</p>
          <AwardsList limit={3} />
          <div className="text-[15px]" style={{ marginTop: "16px" }}>
            •{" "}
            <Link href="/awards" className="underline hover:no-underline">
              View all →
            </Link>
          </div>
        </div>

        <div style={{ marginBottom: "64px" }}>
          <p className="text-[15px] leading-[1.8] mb-4">raw thoughts,</p>
          <div className="space-y-2">
            {recentLogs.map((log) => (
              <div key={log.slug} className="text-[15px]">
                •{" "}
                <Link
                  href={`/logs/${log.slug}`}
                  className="underline hover:no-underline"
                >
                  {log.date}
                </Link>
                {isRecent(log.updatedAt ?? log.date) && (
                  <span className="ml-2 inline-block w-2 h-2 rounded-full bg-blue-500 align-middle" />
                )}
              </div>
            ))}
            <div className="text-[15px]" style={{ marginTop: "16px" }}>
              •{" "}
              <Link href="/logs" className="underline hover:no-underline">
                View all →
              </Link>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: "64px" }}>
          <p className="text-[15px] leading-[1.8] mb-4">synthesized thoughts,</p>
          <div className="space-y-2">
            {recentPosts.map((post) => (
              <div key={post.slug} className="text-[15px]">
                •{" "}
                <Link
                  href={`/thoughts/${post.slug}`}
                  className="underline hover:no-underline"
                >
                  {post.title}
                </Link>
                <span className="ml-2" style={{ color: 'var(--muted-foreground)' }}>— {post.date}</span>
              </div>
            ))}
            <div className="text-[15px]" style={{ marginTop: "16px" }}>
              •{" "}
              <Link href="/thoughts" className="underline hover:no-underline">
                View all →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
