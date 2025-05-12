import { ImageCard } from "@/components/image-card";
import {
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { SzczerbatekTranslations } from "@/translations/szczerbatek/dictionary";

export const OurSolutions = ({
  translations,
}: {
  translations: SzczerbatekTranslations["ourSolutions"];
}) => {
  const orderedItems = [
    { name: "aero", image: "aero.png" },
    { name: "laminating", image: "laminating.jpg" },
    { name: "onboardElectronics", image: "onboard-electronics.jpg" },
    { name: "3DPrinting", image: "3DPrinting.jpg" },
    { name: "programming", image: "soft-implementation.png" },
    { name: "cncMilling", image: "cnc.jpg" },
    { name: "fusion", image: "fusion.png" },
  ];

  return (
    <section className="px-16 py-32" id="solutions">
      <div className="mx-auto max-w-[1680px] gap-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-4xl font-bold text-white">
            {translations.title}
          </h2>
          <p className="text-xl text-white/80">{translations.description}</p>
        </div>
        <Carousel opts={{ loop: true }}>
          <CarouselContent className="-ml-16">
            {orderedItems.map(({ name, image }, index) => (
              <SolutionCard
                key={name}
                index={index}
                imageSrc={`/szczerbatek/ourSolutions/${image}`}
                translation={
                  translations.items[name as keyof typeof translations.items]
                }
              />
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

type ValueOf<T> = T[keyof T];

const SolutionCard = ({
  imageSrc,
  translation,
  index,
}: {
  imageSrc: string;
  index: number;
  translation: ValueOf<SzczerbatekTranslations["ourSolutions"]["items"]>;
}) => {
  return (
    <CarouselItem className="basis-full pl-16 md:basis-1/3">
      <ImageCard
        imageSrc={imageSrc}
        alt={translation.imageAlt}
        index={index}
        title={translation.title}
        description={translation.description}
      />
    </CarouselItem>
  );
};
