import Link from "next/link";
import type { Post } from "~/lib/markdown";
import { GiscusComments } from "~/components/giscus-comments";
import { PostLanguageToggle } from "./post-language-toggle";

export function BlogPostContent({ post }: { post: Post }) {
  const hasKorean = Boolean(post.contentKo && post.htmlContentKo);
  const englishContentId = `post-content-${post.slug}-en`;
  const koreanContentId = `post-content-${post.slug}-ko`;
  const contentClassName = "prose text-[15px] leading-[1.8]";

  return (
    <article>
      <div className="mb-8 flex justify-between items-center">
        <Link href="/thoughts" className="underline hover:no-underline text-[15px]">
          ← Thoughts
        </Link>
        {hasKorean && (
          <PostLanguageToggle
            englishContentId={englishContentId}
            koreanContentId={koreanContentId}
          />
        )}
      </div>

      <h1 className="text-2xl font-semibold mb-2">
        {post.title}
      </h1>
      <p className="text-[15px] mb-8" style={{ color: 'var(--muted-foreground)' }}>
        {post.date}
        {post.author && <> — {post.author}</>}
      </p>

      <div
        id={englishContentId}
        lang="en"
        className={contentClassName}
        dangerouslySetInnerHTML={{ __html: post.htmlContent || "" }}
      />
      {hasKorean && (
        <div
          id={koreanContentId}
          lang="ko"
          hidden
          className={contentClassName}
          dangerouslySetInnerHTML={{ __html: post.htmlContentKo || "" }}
        />
      )}

      <GiscusComments />
    </article>
  );
}
