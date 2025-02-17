import Image from "next/image";
import { getTranslations } from "@/translations/common/dictionary";
import { getUszatekTranslations } from "@/translations/uszatek/dictionary";
import { ImageCard } from "@/components/image-card";
import { ImageSwitcher } from "@/components/image-switcher";

import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Carousel } from "@/components/ui/carousel";
import { Timeline } from "@/components/timeline";

export default async function Uszatek({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const translations = await getTranslations(lang === "pl" ? "pl" : "en");
  const uszatekTranslations = await getUszatekTranslations(
    lang === "pl" ? "pl" : "en"
  );
  const { title, description } = translations.links.projects.items.uszatek;

  return (
    <div className="flex flex-col w-full  mx-auto">
      <section className="relative h-[100vh] w-full">
        <Image src="/team.jpeg" alt="Uszatek" layout="fill" objectFit="cover" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-32 left-16 max-w-xl">
          <div className="bg-black/40 backdrop-blur-md p-8 rounded-lg">
            <h1 className="text-5xl font-bold text-white mb-4">{title}</h1>
            <p className="text-white/90 text-xl">{description}</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-16">
        <div className="w-full gap-8">
          <Carousel opts={{ loop: true }}>
            <CarouselContent className="-ml-16">
              {uszatekTranslations.carousel.items.map((item, index) => (
                <CarouselItem
                  className="basis-full md:basis-1/3 pl-16"
                  key={item.id}
                >
                  <ImageCard
                    imageSrc={item.imageSrc}
                    alt={item.title}
                    index={index}
                    title={item.title}
                    description={item.description}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:block" />
            <CarouselNext className="hidden md:block" />
          </Carousel>
        </div>
      </section>

      <section className="py-16 px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <Timeline items={uszatekTranslations.timeline.items} />
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {uszatekTranslations.team.title}
          </h2>
          <p className="text-gray-600 text-xl">
            {uszatekTranslations.team.description}
          </p>
        </div>
        <ImageSwitcher
          members={uszatekTranslations.team.members}
          autoSwitchInterval={5000}
        />
      </section>
    </div>
  );
}
