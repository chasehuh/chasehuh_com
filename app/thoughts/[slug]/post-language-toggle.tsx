"use client";

import { useEffect, useState } from "react";

type Language = "en" | "ko";

interface PostLanguageToggleProps {
  englishContentId: string;
  koreanContentId: string;
}

export function PostLanguageToggle({
  englishContentId,
  koreanContentId,
}: PostLanguageToggleProps) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const englishContent = document.getElementById(englishContentId);
    const koreanContent = document.getElementById(koreanContentId);

    if (!englishContent || !koreanContent) {
      return;
    }

    const showEnglish = language === "en";
    englishContent.hidden = !showEnglish;
    koreanContent.hidden = showEnglish;
  }, [englishContentId, koreanContentId, language]);

  return (
    <div className="text-[15px]">
      <button
        type="button"
        aria-controls={englishContentId}
        aria-pressed={language === "en"}
        onClick={() => setLanguage("en")}
        className={`${language === "en" ? "font-semibold" : ""} hover:opacity-70`}
      >
        EN
      </button>
      <span className="mx-2">|</span>
      <button
        type="button"
        aria-controls={koreanContentId}
        aria-pressed={language === "ko"}
        onClick={() => setLanguage("ko")}
        className={`${language === "ko" ? "font-semibold" : ""} hover:opacity-70`}
      >
        KR
      </button>
    </div>
  );
}
