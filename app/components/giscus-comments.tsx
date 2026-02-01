"use client";

import Giscus from "@giscus/react";

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
        theme="preferred_color_scheme"
        lang="en"
        loading="lazy"
      />
    </div>
  );
}
