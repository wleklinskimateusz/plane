import Link from "next/link";
import { LanguagesIcon } from "lucide-react";

export const LanguageSwitcher = ({ lang }: { lang: string }) => {
  const oppositeLang = lang === "pl" ? "en-US" : "pl";
  const languageMap = {
    "en-US": "English",
    pl: "Polish",
  };
  return (
    <div className="fixed top-0 right-0">
      <Link href={`/${oppositeLang}`} className="flex items-center gap-2">
        <LanguagesIcon className="w-4 h-4" />
        {languageMap[oppositeLang]}
      </Link>
    </div>
  );
};
