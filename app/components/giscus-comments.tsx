"use client";

import { useState, useEffect } from "react";
import Giscus from "@giscus/react";

export function GiscusComments() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(mq.matches);

    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

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
        theme={isDark ? "dark" : "light"}
        lang="en"
        loading="lazy"
      />
    </div>
  );
}
