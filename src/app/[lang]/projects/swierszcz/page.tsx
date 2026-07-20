import Image from "next/image";
import { getSwierszczTranslations } from "@/translations/swierszcz/dictionary";
import Link from "next/link";
import { VideoSection } from "../../../../components/VideoSection";
import OverviewSection from "@/components/OverviewSection";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ lang: string }>;
}) => {
  const { lang } = await params;
  if (lang === "pl") {
    return {
      title: "AGH Solar Plane - Świerszcz",
        description:
        "Świerszcz to projekt podzespołu Koła Naukowego AGH Solar Plane, który zajmuje się projektowaniem i budową autonomicznych dronów wielowirnikowych.",
    };
  }
  return {
    title: "AGH Solar Plane - Świerszcz",
    description:
      "Świerszcz (Cricket) is a project of the AGH Solar Plane team, which is dedicated to designing and building autonomous multirotor drones.",
  };
}

export default async function Swierszcz({
    params,
    }: {
    params: Promise<{ lang: string }>;
    }) {
    const { lang } = await params;
    const swierszczTranslations = await getSwierszczTranslations(lang);
    return (
        <div className="mx-auto flex w-full flex-col">
            <section className="relative h-screen w-full">
                <Image
                    src="/swierszcz/hero.jpg"
                    alt="Drone in the sky, and a person in the foreground"
                    priority
                    fill
                    sizes="100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center px-4 py-40 text-center md:items-end md:px-20">
                    <div className="max-w-3xl rounded-lg bg-black/60 px-4 py-8 backdrop-blur-sm md:px-6 md:py-12">
                        <h1 className="mb-4 font-serif text-3xl font-bold text-white md:mb-6 md:text-6xl">
                            {swierszczTranslations.hero.title}
                        </h1>
                        <p className="text-sm text-white/90 md:text-2xl">
                            {swierszczTranslations.hero.description}
                        </p>
                        <Link
                            scroll
                            href="#video"
                            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white/20 px-6 py-3 text-sm text-white backdrop-blur-sm transition-colors hover:bg-white/30 md:mt-8 md:px-8 md:py-4 md:text-lg"
                        >
                            {swierszczTranslations.hero.cta}
                        </Link>
                        </div>
                    </div>
                </section>
                {/* Video Section */}

        <VideoSection
            translations={swierszczTranslations.video}
            youtubeVideoId="lTvj2o56lqw"
            thumbnailSrc="/swierszcz/thumbnail.jpg"
        />
        <OverviewSection />
      </div>
    );
}