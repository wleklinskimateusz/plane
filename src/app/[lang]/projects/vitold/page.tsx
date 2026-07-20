import Image from "next/image";
import { getVitoldTranslations } from "@/translations/vitold/dictionary";
import Link from "next/link";
import { VideoSection } from "../../../../components/VideoSection";
import { Timeline } from "@/components/timeline";
import { Financing } from "@/components/Financing";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ lang: string }>;
}) => {
  const { lang } = await params;
  if (lang === "pl") {
    return {
      title: "AGH Solar Plane - VITOLD",
      description:
        "VITOLD to projekt zespołu AGH Solar Plane, który zajmuje się projektowaniem i budową bezzałogowego statku powietrznego do górskich misji ratunkowych.",
    };
  }
  return {
    title: "AGH Solar Plane - VITOLD",
    description:
      "VITOLD is a project of the AGH Solar Plane team, which is dedicated to designing and building an unmanned aerial vehicle for mountain rescue missions.",
  };
};

export default async function Vitold({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const vitoldTranslations = await getVitoldTranslations(lang);
  return (
    <div className="mx-auto flex w-full flex-col">
      <section className="relative h-[100vh] w-full">
        <Image
          src="/vitold/hero.jpg"
          alt="VITOLD in the mountains"
          priority
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center px-4 py-40 text-center md:items-end md:px-20">
          <div className="max-w-3xl rounded-lg bg-black/60 px-4 py-8 backdrop-blur-sm md:px-6 md:py-12">
            <h1 className="mb-4 font-serif text-3xl font-bold text-white md:mb-6 md:text-6xl">
              {vitoldTranslations.hero.title}
            </h1>
            <p className="text-sm text-white/90 md:text-2xl">
              {vitoldTranslations.hero.description}
            </p>
            <Link
              scroll
              href="#video"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white/20 px-6 py-3 text-sm text-white backdrop-blur-sm transition-colors hover:bg-white/30 md:mt-8 md:px-8 md:py-4 md:text-lg"
            >
              {vitoldTranslations.hero.cta}
            </Link>
          </div>
        </div>
      </section>
      <VideoSection
        translations={vitoldTranslations.video}
        youtubeVideoId="l-wD8ITpg0c"
        thumbnailSrc="/vitold/thumbnail.png"
      />
      {/* Timeline Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-[1680px]">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900">
              {vitoldTranslations.timeline.title}
            </h2>
            <p className="text-xl text-gray-600">
              {vitoldTranslations.timeline.description}
            </p>
          </div>
          <div className="px-16">
            <Timeline items={vitoldTranslations.timeline.items} />
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1680px] px-16">
          <Financing financing={vitoldTranslations.financing} />
        </div>
      </section>
    </div>
  );
}
