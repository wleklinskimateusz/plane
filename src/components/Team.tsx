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
    <section className="w-full bg-gray-50 px-2 py-16">
      <div className="mx-auto max-w-[1680px]">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900">
            {translations.title}
          </h2>
          <p className="text-xl text-gray-600">{translations.description}</p>
        </div>
        <ImageSwitcher
          backgroundImage={"/szczerbatek/team/all.jpg"}
          members={orderedMembers}
          autoSwitchInterval={5000}
        />
      </div>
    </section>
  );
};
