import Image from "next/image";
import { getTranslations } from "@/translations/common/dictionary";
export default async function Uszatek({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const translations = await getTranslations(lang);
  const { title, description } = translations.links.projects.items.uszatek;
  return (
    <section className="relative h-screen w-full">
      <Image
        src="/team.jpeg"
        alt="Uszatek"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0   flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white">{title}</h1>
        <p className="text-white">{description}</p>
      </div>
    </section>
  );
}
