import dynamic from "next/dynamic";
import Image from "next/image";
import { getRicoTranslations } from "@/translations/rico/dictionary";

import Link from "next/link";
import { VideoSection } from "../../../../components/VideoSection";
import { RicoThreeDModelSection } from "@/app/[lang]/projects/rico/_components/Rico3DModelSection";
import { Timeline } from "@/components/timeline";
import { OverviewSection, UAVParameter, UAVParametersTable } from "@/components/OverviewSection";
import { Team } from "../swierszcz/_components/TeamGrouped";

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
    const uavParametersTable: UAVParametersTable = {
        sections: [
            {
                title: 'Airframe & Weight',
                parameters: [
                    { label: 'Wingspan', value: '3020 mm (118.9 in)' },
                    { label: 'Length', value: '1480 mm (57.27 in)' },
                    { label: 'Empty Weight', value: '2.5 kg (without airdrops and battery)' },
                    { label: 'Take-off Weight', value: '4.1 kg (with airdrops and battery)' },
                    { label: 'MTOW', value: '4.5 kg (Maximum Take-Off Weight)' },
                ],
            },
            {
                title: 'Flight Performance',
                parameters: [
                    { label: 'Cruise Speed', value: '25 m/s (60 mph)' },
                    { label: 'Never Exceed Speed', value: '90 m/s (201 mph)' },
                    { label: 'Stall Speed', value: '16 m/s (35.8 mph)' },
                    { label: 'Stall Speed (with flaps)', value: '9 m/s (20.1 mph)' },
                ],
            },
            {
                title: 'Power & Endurance',
                parameters: [
                    { label: 'Max Flight Time', value: '~50 minutes at cruise speed' },
                    { label: 'Theoretical Range', value: '75 km (46 miles)' },
                    { label: 'Power Unit', value: 'Two 3S2P Custom Li-Ion batteries, 17.6 Ah total capacity' },
                ],
            },
            {
                title: 'Propulsion System',
                parameters: [
                    { label: 'Motor', value: 'Leomotion L3025-4550-V2 Brushless DC' },
                    { label: 'Motor Power', value: '1000 W' },
                    { label: 'Motor KV', value: '4550 U/V' },
                    { label: 'Motor Gear', value: '6.7:1 multiplanetary gear' },
                    { label: 'Propeller', value: '16x10" or 18x10" Folding Prop' },
                    { label: 'ESC', value: 'Dualsky Summit 60A' },
                ],
            },
            {
                title: 'Avionics & Comm',
                parameters: [
                    { label: 'Flight Controller', value: 'Mateksys H743-Wing' },
                    { label: 'Telemetry', value: 'Mateksys MAVLink mR900-30 (915 MHz)' },
                    { label: 'Radio Control', value: 'Radiomaster RP1 2.4GHz ELRS' },
                    { label: 'Navigation', value: 'Foxeer M10Q 250 (L1 band, multi-constellation)' },
                    { label: 'Airspeed Sensor', value: 'Matek Digital Airspeed Sensor ASPD-4525' },
                    { label: 'Range Sensor', value: 'Lidar TF Luna (for autonomous landing)' },
                ],
            },
            {
                title: 'Compute & Perception',
                parameters: [
                    { label: 'Companion Computer', value: 'NVIDIA Jetson Orin Nano' },
                    { label: 'Primary Vision', value: 'AR0234 Global Shutter Color Camera' },
                ],
            },
        ],
    };
    return (
        <div className="mx-auto flex w-full flex-col">
            <section className="relative h-screen w-full">
                <Image
                    src="/rico/prototype-test.jpg"
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
                youtubeVideoId="2WTfM2sjp9M"
                thumbnailSrc="/rico/video_thumbnail.jpg"
            />
            {/* 3D Model Section */}
            <RicoThreeDModelSection />
            <OverviewSection uavParametersTable={uavParametersTable} />
            {/* Timeline Section */}
            <section className="bg-gray-50 py-16">
                <div className="mx-auto max-w-420">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900">
                            {RicoTranslations.timeline.title}
                        </h2>
                        <p className="text-xl text-gray-600">
                            {RicoTranslations.timeline.description}
                        </p>
                    </div>
                    <div className="px-16">
                        <Timeline items={RicoTranslations.timeline.items} lineItemSrc="/rico/plane.svg" lineItemRotate={true} />
                    </div>
                </div>
            </section>
            {/* Team Section */}
            <Team translations={RicoTranslations.team} />
        </div>
    );
}
