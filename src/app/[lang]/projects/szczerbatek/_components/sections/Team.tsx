import { ImageSwitcher } from "@/components/image-switcher";
import { SzczerbatekTranslations } from "@/translations/szczerbatek/dictionary";

export const Team = ({
  translations,
}: {
  translations: SzczerbatekTranslations["team"];
}) => {
  const orderedMembers = (
    [
      "iza",
      "kacper",
      "roza",
      "sebastian",
      "krzysztof",
      "piotr",
      "filip",
      "wojtek",
      "lukasz",
      "ignacy",
      "filipG",
      "marta",
      "radek",
    ] satisfies (keyof SzczerbatekTranslations["team"]["members"])[]
  ).map((member) => {
    const { name, role, description } = translations.members[member];
    return {
      name,
      role,
      description,
      imageSrc: `/szczerbatek/team/${member}.jpg`,
    };
  });
  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-[1680px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {translations.title}
          </h2>
          <p className="text-gray-600 text-xl">{translations.description}</p>
        </div>
        <ImageSwitcher
          backgroundImage={"/team/all.jpg"}
          members={orderedMembers}
          autoSwitchInterval={5000}
        />
      </div>
    </section>
  );
};
