"use client";

import dynamic from "next/dynamic";

const Giscus = dynamic(() => import("@giscus/react"), {
  ssr: false,
});

export function GiscusComments() {
  return (
    <div style={{ marginTop: "64px" }}>
      <Giscus
        repo="chaewon-huh/chaewon_me"
        repoId="R_kgDOPPXHvg"
        category="General"
        categoryId="DIC_kwDOPPXHvs4C1sjT"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="en"
        loading="lazy"
      />
    </div>
  );
}
