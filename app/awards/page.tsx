import Link from "next/link";
import { AwardsList } from "~/components/awards-list";

export default function AwardsPage() {
  return (
    <div>
      <div className="mb-8">
        <Link href="/" className="underline hover:no-underline text-[15px]">
          ← Home
        </Link>
      </div>

      <h1 className="text-2xl font-semibold mb-8">Awards</h1>

      <AwardsList />
    </div>
  );
}
