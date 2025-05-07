import Image from "next/image";
import { getTranslations } from "@/translations/common/dictionary";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const { hero } = await getTranslations(lang);

  return (
    <div className="flex flex-col w-full">
      <section className="relative h-[100vh] w-full">
        <Image
          src="/team.png"
          alt="AGH Solar Plane"
          priority
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold text-white mb-6">{hero.title}</h1>
            <p className="text-white/90 text-xl md:text-2xl">{hero.subtitle}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
