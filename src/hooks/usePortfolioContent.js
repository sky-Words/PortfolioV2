import { useMemo, useState } from "react";
import { portfolioContent } from "../data/portfolioContent";

export function usePortfolioContent(defaultLanguage = "en") {
  const [language, setLanguage] = useState(defaultLanguage);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "fr" ? "en" : "fr"));
  };

  const current = useMemo(() => portfolioContent[language], [language]);

  return {
    current,
    language,
    setLanguage,
    toggleLanguage,
  };
}
