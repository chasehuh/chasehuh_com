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

      <p className="text-[15px] leading-[1.8] mb-8">
        20 y/o founder building{" "}
        <a href="https://sumelabs.com" className="underline hover:no-underline">
          sumelabs.com
        </a>
        <br />
        Looking for cracked (young, smart, optimistic) talents
      </p>

      <p className="text-[15px]">
        <a
          href="mailto:chase@sumelabs.com"
          className="underline hover:no-underline"
        >
          email
        </a>
        {" | "}
        <a
          href="https://github.com/chasehuh"
          className="underline hover:no-underline"
        >
          github
        </a>
        {" | "}
        <a
          href="https://x.com/chaewonhuh_me"
          className="underline hover:no-underline"
        >
          x.com
        </a>
      </p>

      <div style={{ marginTop: "48px" }}>
        <div style={{ marginBottom: "64px" }}>
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              marginBottom: "16px",
              marginTop: "32px",
            }}
          >
            Experience
          </h2>
          <ExperienceList />
        </div>

        <div style={{ marginBottom: "64px" }}>
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              marginBottom: "16px",
              marginTop: "32px",
            }}
          >
            Education
          </h2>
          <div className="text-[15px] leading-[1.8]">
            • BS in Computer Science, POSTECH (24.03 - 24.07)
            <div style={{ marginLeft: "40px", marginTop: "12px" }}>
              <ul className="list-disc list-outside ml-5 space-y-2">
                <li>withdrew after the first semester</li>
              </ul>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: "64px" }}>
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              marginBottom: "16px",
              marginTop: "32px",
            }}
          >
            Awards
          </h2>
          <AwardsList limit={3} />
          <div className="text-[15px]" style={{ marginTop: "16px" }}>
            •{" "}
            <Link href="/awards" className="underline hover:no-underline">
              View all →
            </Link>
          </div>
        </div>

        <div style={{ marginBottom: "64px" }}>
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              marginBottom: "16px",
              marginTop: "32px",
            }}
          >
            Logs
          </h2>
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
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              marginBottom: "16px",
              marginTop: "32px",
            }}
          >
            Thoughts
          </h2>
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
