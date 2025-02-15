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
    <>
      <div className="flex w-full justify-center">
        <Navigation commonDictionary={commonDictionary} />
      </div>
      <main className="flex flex-col max-w-screen-3xl mx-auto">{children}</main>
      <LanguageSwitcher lang={lang} />
    </>
  );
}
