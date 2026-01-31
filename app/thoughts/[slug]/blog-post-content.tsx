"use client";

import { useState } from "react";
import Link from "next/link";
import type { Post } from "~/lib/markdown";
import { GiscusComments } from "~/components/giscus-comments";

export function BlogPostContent({ post }: { post: Post }) {
  const hasKorean = post.contentKo && post.htmlContentKo;
  const [lang, setLang] = useState<'en' | 'ko'>('en');

  return (
    <article>
      <div className="mb-8 flex justify-between items-center">
        <Link href="/thoughts" className="underline hover:no-underline text-[15px]">
          ← Thoughts
        </Link>
        {hasKorean && (
          <div className="text-[15px]">
            <button
              onClick={() => setLang('en')}
              className={`${lang === 'en' ? 'font-semibold' : ''} hover:opacity-70`}
            >
              EN
            </button>
            <span className="mx-2">|</span>
            <button
              onClick={() => setLang('ko')}
              className={`${lang === 'ko' ? 'font-semibold' : ''} hover:opacity-70`}
            >
              KR
            </button>
          </div>
        )}
      </div>

      <h1 className="text-2xl font-semibold mb-2">
        {post.title}
      </h1>
      <p className="text-[15px] text-gray-500 mb-8">
        {post.date}
        {post.author && <> — {post.author}</>}
      </p>

      <div
        lang={lang}
        className="prose text-[15px] leading-[1.8]"
        dangerouslySetInnerHTML={{
          __html: lang === 'ko' && post.htmlContentKo ? post.htmlContentKo : post.htmlContent || ''
        }}
      />

      <GiscusComments />
    </article>
  );
}
