import { Navigation } from "@/components/navigation";
import { getTranslations } from "@/translations/common/dictionary";

import { LanguageSwitcher } from "@/components/language-switcher";

export function generateStaticParams() {
  return ["pl", "en"].map((lang) => ({ lang }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  const commonDictionary = await getTranslations(lang === "pl" ? "pl" : "en");

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm h-[80px]">
        <div className="flex w-full justify-center relative h-full">
          <Navigation commonDictionary={commonDictionary} />
          <LanguageSwitcher lang={lang} />
        </div>
      </div>
      <main className="flex-1 flex flex-col max-w-screen-3xl mx-auto w-full mt-[80px]">
        {children}
      </main>
    </div>
  );
}
