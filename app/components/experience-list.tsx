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

export function ExperienceList() {
  return <ExpandableList items={experienceItems} />;
}
