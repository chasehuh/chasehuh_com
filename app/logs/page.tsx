import Link from "next/link";
import { getAllLogs } from "~/lib/markdown";

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
          <li key={log.slug} className="text-[15px]">
            <Link
              href={`/logs/${log.slug}`}
              className="underline hover:no-underline"
            >
              {log.date}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
