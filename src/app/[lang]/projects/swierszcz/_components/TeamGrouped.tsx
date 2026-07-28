import { ImageSwitcher } from "@/components/image-switcher";
import { SwierszczTranslations } from "@/translations/swierszcz/dictionary";

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
      "power",
      "electronics",
      "software",
    ] satisfies (keyof SwierszczTranslations["team"]["divisions"])[]
  ).map((division) => {
    const { title, description, members } = translations.divisions[division];
    return {
      title,
      description,
      members,
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
        </div>
      </div>
    </section>
  );
};
