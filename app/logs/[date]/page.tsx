import { notFound } from "next/navigation";
import Link from "next/link";
import { getLogByDate, getAllLogSlugs } from "~/lib/markdown";
import { GiscusComments } from "~/components/giscus-comments";

export async function generateStaticParams() {
  return getAllLogSlugs();
}

export default async function LogPost({
  params,
}: {
  params: Promise<{ date: string }>;
}) {
  const { date } = await params;
  const log = await getLogByDate(date);

  if (!log) {
    notFound();
  }

  return (
    <article>
      <div className="mb-8">
        <Link href="/logs" className="underline hover:no-underline text-[15px]">
          ← Logs
        </Link>
      </div>

      <h1 className="text-2xl font-semibold mb-8">
        {log.date}
      </h1>

      <div
        className="prose text-[15px] leading-[1.8]"
        dangerouslySetInnerHTML={{ __html: log.htmlContent || "" }}
      />

      <GiscusComments />
    </article>
  );
}
