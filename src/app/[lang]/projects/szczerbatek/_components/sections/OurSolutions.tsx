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
    "design",
    "laminating",
    "onboardElectronics",
    "3DPrinting",
    "programming",
    "cncMilling",
  ] satisfies (keyof SzczerbatekTranslations["ourSolutions"]["items"])[];

  return (
    <section className="py-16 px-16">
      <div className="max-w-[1680px] mx-auto gap-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            {translations.title}
          </h2>
          <p className="text-white/80 text-xl">{translations.description}</p>
        </div>
        <Carousel opts={{ loop: true }}>
          <CarouselContent className="-ml-16">
            {orderedItems.map((item, index) => (
              <SolutionCard
                key={item}
                index={index}
                imageSrc={`/szczerbatek/ourSolutions/${item}.jpg`}
                translation={translations.items[item]}
              />
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:block" />
          <CarouselNext className="hidden md:block" />
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
    <CarouselItem className="basis-full md:basis-1/3 pl-16">
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
