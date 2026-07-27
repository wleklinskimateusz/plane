import dynamic from "next/dynamic";
import Image from "next/image";
import { getRicoTranslations } from "@/translations/rico/dictionary";

import Link from "next/link";
import { VideoSection } from "../../../../components/VideoSection";
import { RicoThreeDModelSection } from "@/app/[lang]/projects/rico/_components/Rico3DModelSection";
import { Timeline } from "@/components/timeline";

export const generateMetadata = async ({
    params,
}: {
    params: Promise<{ lang: string }>;
}) => {
    const { lang } = await params;
    if (lang === "pl") {
        return {
            title: "AGH Solar Plane - Rico",
            description:
                "Rico to projekt zespołu AGH Solar Plane, który zajmuje się projektowaniem i budową autonomicznego samolotu napędzanego energią słoneczną.",
        };
    }
    return {
        title: "AGH Solar Plane - Rico",
        description:
            "Rico is a project of the AGH Solar Plane team, which is dedicated to designing and building an autonomous solar plane.",
    };
};

export default async function Rico({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const RicoTranslations = await getRicoTranslations(lang);
    return (
        <div className="mx-auto flex w-full flex-col">
            <section className="relative h-screen w-full">
                <Image
                    src="/rico/hero.png"
                    alt="Plane in the sky, and a person in the foreground"
                    priority
                    fill
                    sizes="100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center px-4 py-40 text-center md:items-end md:px-20">
                    <div className="max-w-3xl rounded-lg bg-black/60 px-4 py-8 backdrop-blur-sm md:px-6 md:py-12">
                        <h1 className="mb-4 font-serif text-3xl font-bold text-white md:mb-6 md:text-6xl">
                            {RicoTranslations.hero.title}
                        </h1>
                        <p className="text-sm text-white/90 md:text-2xl">
                            {RicoTranslations.hero.description}
                        </p>
                        <Link
                            scroll
                            href="#solutions"
                            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white/20 px-6 py-3 text-sm text-white backdrop-blur-sm transition-colors hover:bg-white/30 md:mt-8 md:px-8 md:py-4 md:text-lg"
                        >
                            {RicoTranslations.hero.cta}
                        </Link>
                    </div>
                </div>
            </section>
            {/* Video Section */}

            <VideoSection
                translations={RicoTranslations.video}
                youtubeVideoId="MXFX66lDg1o"
                thumbnailSrc="/rico/thumbnail.jpg"
            />
            {/* 3D Model Section */}
            <RicoThreeDModelSection />
            {/* Timeline Section */}
            <section className="bg-gray-50 py-16">
                <div className="mx-auto max-w-[1680px]">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900">
                            {RicoTranslations.timeline.title}
                        </h2>
                        <p className="text-xl text-gray-600">
                            {RicoTranslations.timeline.description}
                        </p>
                    </div>
                    <div className="px-16">
                        <Timeline items={RicoTranslations.timeline.items} />
                    </div>
                </div>
            </section>
        </div>
    );
}
