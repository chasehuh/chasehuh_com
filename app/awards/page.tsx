"use client";

import Link from "next/link";
import { ExpandableList } from "~/components/expandable-section";

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

export default function AwardsPage() {
  return (
    <div>
      <div className="mb-8">
        <Link href="/" className="underline hover:no-underline text-[15px]">
          ← Home
        </Link>
      </div>

      <h1 className="text-2xl font-semibold mb-8">Awards</h1>

      <ExpandableList items={awardItems} />
    </div>
  );
}
