import Image from "next/image";
import { getTranslations } from "@/translations/common/dictionary";
import { getSzczerbatekTranslations } from "@/translations/szczerbatek/dictionary";
import { VideoPlayer } from "@/components/video-player";

import { Timeline } from "@/components/timeline";
import Link from "next/link";
import { OurSolutions } from "./_components/sections/OurSolutions";
import { Team } from "./_components/sections/Team";
import { VideoSection } from "./_components/sections/VideoSection";

export default async function Szczerbatek({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const {
    links: {
      projects: {
        items: {
          szczerbatek: { title, description },
        },
      },
    },
  } = await getTranslations(lang === "pl" ? "pl" : "en");
  const szczerbatekTranslations = await getSzczerbatekTranslations(lang);
  return (
    <div className="flex flex-col w-full  mx-auto">
      <section className="relative h-[100vh] w-full">
        <Image
          src="/team.jpeg"
          alt="Szczerbatek"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-32 left-16 max-w-xl">
          <div className="bg-black/40 backdrop-blur-md p-8 rounded-lg">
            <h1 className="text-5xl font-bold text-white mb-4">{title}</h1>
            <p className="text-white/90 text-xl">{description}</p>
          </div>
        </div>
      </section>
      <OurSolutions translations={szczerbatekTranslations.ourSolutions} />
      {/* Video Section */}
      <VideoSection translations={szczerbatekTranslations.video} />
      {/* Timeline Section */}
      <section className=" bg-gray-50 py-16">
        <div className=" max-w-[1680px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {szczerbatekTranslations.timeline.title}
            </h2>
            <p className="text-gray-600 text-xl">
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
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {szczerbatekTranslations.organization.title}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {szczerbatekTranslations.organization.description}
            </p>
            <Link
              href={`/${lang}`}
              className="inline-flex items-center gap-2 bg-gray-900/10 hover:bg-gray-900/20 text-gray-900 px-8 py-4 rounded-lg transition-colors backdrop-blur-sm"
            >
              {szczerbatekTranslations.organization.cta}
              <svg
                className="w-5 h-5"
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
