import { ImageSwitcher } from "@/app/[lang]/projects/swierszcz/_components/TeamDivisionSwapper";
import { SwierszczTranslations } from "@/translations/swierszcz/dictionary";
import { div } from "three/src/nodes/tsl/TSLBase.js";

export const Team = ({
  translations,
}: {
  translations: SwierszczTranslations["team"];
}) => {
  const orderedDivisions = (
    [
      "organization",
      "operators",
      "construction",
      "electronics",
      "software",
    ] satisfies (keyof SwierszczTranslations["team"]["divisions"])[]
  ).map((division) => {
    const { title, description, members, videoSrc } = translations.divisions[division];
    return {
      title,
      description,
      members,
      videoSrc,
    };
  })


  return (
    <section className="w-full bg-gray-50 px-2 py-16">
      <div className="mx-auto max-w-[1680px]">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900">
            {translations.title}
          </h2>
          <p className="text-xl text-gray-600">{translations.description}</p>
          <ImageSwitcher
            divisions={orderedDivisions}
            autoSwitchInterval={5000}
          />
        </div>
      </div>
    </section>
  );
}
