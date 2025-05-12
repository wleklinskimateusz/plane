import { Navigation } from "@/components/navigation";
import { getTranslations } from "@/translations/common/dictionary";

import { Footer } from "@/components/footer";

export function generateStaticParams() {
  return ["pl", "en"].map((lang) => ({ lang }));
}

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ lang: string }>;
}) => {
  const { lang } = await params;
  if (lang === "pl") {
    return {
      title: "AGH Solar Plane",
      description:
        "Koło Naukowe AGH Solar Plane - zespół studentów AGH, którzy zajmują się projektem autonomicznego samolotu napędzanego energią słoneczną.",
    };
  }
  return {
    title: "AGH Solar Plane",
    description:
      "Student's organization from AGH University of Science and Technology in Krakow, Poland, working on autonomous solar plane project.",
  };
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  const { footer, links } = await getTranslations(lang);

  return (
    <div className="flex min-h-screen flex-col">
      <div className="fixed top-0 right-0 left-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="relative flex h-full w-full justify-center">
          <Navigation linksTranslations={links} lang={lang} />
        </div>
      </div>
      <main className="max-w-screen-3xl mx-auto flex w-full flex-1 flex-col">
        {children}
      </main>
      <Footer translations={footer} />
    </div>
  );
}
