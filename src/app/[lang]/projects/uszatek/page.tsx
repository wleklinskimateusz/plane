import Image from "next/image";
import { getTranslations } from "@/translations/common/dictionary";
import { ImageCard } from "@/components/image-card";
import { BlueprintWrapper } from "@/components/blueprint-wrapper";

import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Carousel } from "@/components/ui/carousel";

const carouselItems = [
  {
    id: 1,
    imageSrc: "/team.jpeg",
    alt: "Description 1",
    dimensions: {
      width: "400px",
      height: "300px",
    },
  },
  {
    id: 2,
    imageSrc: "/team.jpeg",
    alt: "Description 2",
    dimensions: {
      width: "450px",
      height: "320px",
    },
  },
  {
    id: 3,
    imageSrc: "/team.jpeg",
    alt: "Description 3",
    dimensions: {
      width: "380px",
      height: "285px",
    },
  },
  {
    id: 4,
    imageSrc: "/team.jpeg",
    alt: "Description 4",
    dimensions: {
      width: "420px",
      height: "315px",
    },
  },
  {
    id: 5,
    imageSrc: "/team.jpeg",
    alt: "Description 5",
    dimensions: {
      width: "390px",
      height: "293px",
    },
  },
  {
    id: 6,
    imageSrc: "/team.jpeg",
    alt: "Description 6",
    dimensions: {
      width: "410px",
      height: "308px",
    },
  },
  {
    id: 7,
    imageSrc: "/team.jpeg",
    alt: "Description 7",
    dimensions: {
      width: "440px",
      height: "330px",
    },
  },
  {
    id: 8,
    imageSrc: "/team.jpeg",
    alt: "Description 8",
    dimensions: {
      width: "405px",
      height: "304px",
    },
  },
];

export default async function Uszatek({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const translations = await getTranslations(lang);
  const { title, description } = translations.links.projects.items.uszatek;

  return (
    <div className="flex flex-col w-full  mx-auto">
      <section className="relative h-[100vh] w-full">
        <Image
          src="/team.jpeg"
          alt="Uszatek"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
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
            <CarouselContent>
              {carouselItems.map((item) => (
                <CarouselItem className="basis-full md:basis-1/3" key={item.id}>
                  <BlueprintWrapper
                    topText={item.dimensions.width}
                    rightText={item.dimensions.height}
                  >
                    <ImageCard imageSrc={item.imageSrc} alt={item.alt} />
                  </BlueprintWrapper>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:block" />
            <CarouselNext className="hidden md:block" />
          </Carousel>
        </div>
      </section>
    </div>
  );
}
