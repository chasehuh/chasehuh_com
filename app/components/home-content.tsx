"use client";

import Link from "next/link";
import { ExpandableList } from "~/components/expandable-section";

interface PostSummary {
  slug: string;
  title: string;
  date: string;
}

interface LogSummary {
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
  const experienceItems = [
    {
      id: "cofounder",
      label: <span>• <strong>Co-founder at Sume</strong> (26.01 - )</span>,
      children: (
        <ul className="list-disc list-outside ml-5 space-y-2">
          <li>
            <a
              href="https://sumelabs.com"
              className="underline hover:no-underline"
            >
              sumelabs.com
            </a>
            : Giving face to AI
          </li>
          <li>
            Backed by{" "}
            <a
              href="https://f.inc"
              className="underline hover:no-underline"
            >
              Founders Inc.
            </a>
          </li>
        </ul>
      ),
    },
    {
      id: "hir",
      label: "• HIR (Hacker in Residence) at Bass Ventures (25.09 - 25.12)",
      children: (
        <ul className="list-disc list-outside ml-5 space-y-2">
          <li>Built in Residence, Collected Context</li>
        </ul>
      ),
    },
    {
      id: "stealth",
      label: "• Stealth Startup (25.04 - 25.08)",
      children: (
        <ul className="list-disc list-outside ml-5 space-y-2">
          <li>Grinding away on various projects.</li>
          <li style={{ marginTop: "8px" }}>
            Aug: B2C Viral Product - 10M+ Reels views in Korea, modest
            monetization despite viral traction
          </li>
        </ul>
      ),
    },
    {
      id: "dalpha",
      label: "• AI Engineer at Dalpha (24.07 - 25.02)",
      children: (
        <ul className="list-disc list-outside ml-5 space-y-2">
          <li>
            Worked at a Korean Palantir-like(customized B2B solutions)
            startup that raised over 10m USD
          </li>
          <li>
            Built and deployed end-to-end AI pipelines for more than
            10 enterprise clients.
          </li>
        </ul>
      ),
    },
  ];

  const awardItems = [
    {
      id: "presidential",
      label: "• POSTECH Presidential Fellowship by Special Talent",
      children: (
        <ul className="list-disc list-outside ml-5 space-y-2">
          <li>Full ride + 50k grant.</li>
          <li>Sole recipient in class of &apos;28.</li>
        </ul>
      ),
    },
    {
      id: "isef2023",
      label: "• Grand Award 4th Place at Regeneron ISEF '23",
      children: (
        <ul className="list-disc list-outside ml-5 space-y-2">
          <li>
            world&apos;s largest pre-college science competition,
            where high school students showcase innovative research
            projects in STEM fields, organized annually by the Society
            for Science.
          </li>
          <li>
            Project:{" "}
            <a
              href="https://isef.net/project/ebed023t-autonomous-walking-aid-for-the-blind"
              className="underline hover:no-underline"
            >
              Autonomous Walking Aid for the Blind
            </a>
            .
          </li>
        </ul>
      ),
    },
    {
      id: "isef-finalist",
      label: "• Finalist at Regeneron ISEF '22 & '23",
      children: (
        <ul className="list-disc list-outside ml-5 space-y-2">
          <li>
            world&apos;s largest pre-college science competition,
            where high school students showcase innovative research
            projects in STEM fields, organized annually by the Society
            for Science.
          </li>
          <li>
            &apos;23 Project:{" "}
            <a
              href="https://isef.net/project/ebed023t-autonomous-walking-aid-for-the-blind"
              className="underline hover:no-underline"
            >
              Autonomous Walking Aid for the Blind
            </a>
            .
          </li>
          <li>
            &apos;22 Project:{" "}
            <a
              href="https://abstracts.societyforscience.org/Home/FullAbstract?ISEFYears=2022,&Category=Any%20Category&Finalist=Huh&AllAbstracts=True&FairCountry=Any%20Country&FairState=Any%20State&ProjectId=21742"
              className="underline hover:no-underline"
            >
              Link
            </a>
            .
          </li>
        </ul>
      ),
    },
    {
      id: "codefair22",
      label: "• First Place at Korea Code Fair '22",
      children: (
        <p>
          major coding competition and fair, which evolved from the
          KOI competition division and serves as an ISEF qualifier.
        </p>
      ),
    },
    {
      id: "codefair21",
      label: "• Second Place at Korea Code Fair '21",
      children: (
        <p>
          major coding competition and fair, which evolved from the
          KOI competition division and serves as an ISEF qualifier.
        </p>
      ),
    },
    {
      id: "talent",
      label: "• Talent Award of Korea '22",
      children: (
        <ul className="list-disc list-outside ml-5 space-y-2">
          <li>
            National accolade presented by the South Korean government
            to recognize and nurture exceptional young talents in
            fields such as science, technology, arts, and humanities,
            fostering innovation and leadership.
          </li>
          <li>Same award as received by Yuna Kim.</li>
        </ul>
      ),
    },
  ];

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
          href="https://github.com/chaewon-huh"
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
          <ExpandableList items={experienceItems} />
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
          <div className="space-y-4">
            <div className="text-[15px] leading-[1.8]">
              • BS, POSTECH (24.03 - Present)
              <div style={{ marginLeft: "40px", marginTop: "12px" }}>
                <ul className="list-disc list-outside ml-5 space-y-2">
                  <li>on leave after semester 1</li>
                </ul>
              </div>
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
          <ExpandableList items={awardItems.slice(0, 3)} />
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
              <div key={log.date} className="text-[15px]">
                •{" "}
                <Link
                  href={`/logs/${log.date.replace(/-/g, "_")}`}
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
