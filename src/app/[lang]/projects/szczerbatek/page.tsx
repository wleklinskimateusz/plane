import Image from "next/image";
import { getSzczerbatekTranslations } from "@/translations/szczerbatek/dictionary";

import { Timeline } from "@/components/timeline";
import Link from "next/link";
import { OurSolutions } from "./_components/sections/OurSolutions";
import { Team } from "./_components/sections/Team";
import { VideoSection } from "./_components/sections/VideoSection";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ lang: string }>;
}) => {
  const { lang } = await params;
  if (lang === "pl") {
    return {
      title: "AGH Solar Plane - Szczerbatek",
      description:
        "Szczerbatek to projekt zespołu AGH Solar Plane, który zajmuje się projektowaniem i budową autonomicznego samolotu napędzanego energią słoneczną.",
    };
  }
  return {
    title: "AGH Solar Plane - Szczerbatek",
    description:
      "Szczerbatek is a project of the AGH Solar Plane team, which is dedicated to designing and building an autonomous solar plane.",
  };
};

export default async function Szczerbatek({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const szczerbatekTranslations = await getSzczerbatekTranslations(lang);
  return (
    <div className="mx-auto flex w-full flex-col">
      <section className="relative h-[100vh] w-full">
        <Image
          src="/szczerbatek/hero.jpg"
          alt="Plane in the sky, and a person in the foreground"
          priority
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center px-4 py-40 text-center md:items-end md:px-20">
          <div className="max-w-3xl rounded-lg bg-black/60 px-4 py-8 backdrop-blur-sm md:px-6 md:py-12">
            <h1 className="mb-4 font-serif text-3xl font-bold text-white md:mb-6 md:text-6xl">
              {szczerbatekTranslations.hero.title}
            </h1>
            <p className="text-sm text-white/90 md:text-2xl">
              {szczerbatekTranslations.hero.description}
            </p>
            <Link
              scroll
              href="#solutions"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white/20 px-6 py-3 text-sm text-white backdrop-blur-sm transition-colors hover:bg-white/30 md:mt-8 md:px-8 md:py-4 md:text-lg"
            >
              {szczerbatekTranslations.hero.cta}
            </Link>
          </div>
        </div>
      </section>
      <OurSolutions translations={szczerbatekTranslations.ourSolutions} />
      {/* Video Section */}

      <VideoSection translations={szczerbatekTranslations.video} />
      {/* Timeline Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-[1680px]">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900">
              {szczerbatekTranslations.timeline.title}
            </h2>
            <p className="text-xl text-gray-600">
              {szczerbatekTranslations.timeline.description}
            </p>
          </div>
          <div className="px-16">
            <Timeline items={szczerbatekTranslations.timeline.items} />
          </div>
        </div>
      </section>
      <Team translations={szczerbatekTranslations.team} />
      {/* Organization Section */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-[1680px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-serif text-4xl font-bold text-gray-900">
              {szczerbatekTranslations.organization.title}
            </h2>
            <p className="mb-8 text-xl text-gray-600">
              {szczerbatekTranslations.organization.description}
            </p>
            <Link
              href={`/${lang}`}
              className="inline-flex items-center gap-2 rounded-lg bg-gray-900/10 px-8 py-4 text-gray-900 backdrop-blur-sm transition-colors hover:bg-gray-900/20"
            >
              {szczerbatekTranslations.organization.cta}
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
