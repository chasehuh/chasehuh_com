"use client";

import { ExpandableList } from "~/components/expandable-section";

const experienceItems = [
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
    label: "• Founder at Canny (25.04 - 25.08)",
    children: (
      <ul className="list-disc list-outside ml-5 space-y-2">
        <li>Made Realistic AI Avatar shortform generator, reached 10M+ Reels views with modest monetization.</li>
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

export function ExperienceList() {
  return <ExpandableList items={experienceItems} />;
}
