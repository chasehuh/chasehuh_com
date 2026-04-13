import type { Metadata } from "next";
import Link from "next/link";
import { getAllLogs } from "~/lib/markdown";
import { buildMetadata } from "~/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Logs",
  description: "Daily logs from Chaewon Huh covering startup progress, decisions, and momentum.",
  path: "/logs",
});

function isRecent(dateStr: string): boolean {
  const logDate = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - logDate.getTime();
  const diffDays = diffMs / (1000 * 60 * 60 * 24);
  return diffDays <= 3 && diffDays >= 0;
}

export default function LogsIndex() {
  const logs = getAllLogs();

  return (
    <div>
      <div className="mb-8">
        <Link href="/" className="underline hover:no-underline text-[15px]">
          ← Home
        </Link>
      </div>

      <h1 className="text-2xl font-semibold mb-8">Logs</h1>

      <ul className="space-y-2">
        {logs.map((log) => (
          <li key={log.slug} className="text-[15px] flex items-center gap-2">
            <Link
              href={`/logs/${log.slug}`}
              className="underline hover:no-underline"
            >
              {log.date}
            </Link>
            {isRecent(log.updatedAt ?? log.date) && (
              <span className="w-2 h-2 rounded-full bg-blue-500" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
