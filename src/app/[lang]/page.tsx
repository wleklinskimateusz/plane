import Image from "next/image";
import { getTranslations } from "@/translations/common/dictionary";
import { organizationConfig } from "@/config/organization";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const { hero, about } = await getTranslations(lang);

  return (
    <div className="flex flex-col w-full">
      <section className="relative h-[100vh] w-full">
        <Image
          src="/team.jpeg"
          alt="AGH Solar Plane"
          priority
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold text-white mb-6">{hero.title}</h1>
            <p className="text-white/90 text-xl md:text-2xl">{hero.subtitle}</p>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="relative py-24 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              {about.title}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-16">
              {about.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Stat
              value={`${organizationConfig.members}+`}
              label={about.stats.members}
            />
            <Stat
              value={`${organizationConfig.activeProjects}`}
              label={about.stats.projects}
            />
            <Stat
              value={`${
                new Date().getFullYear() - organizationConfig.founded
              }+`}
              label={about.stats.years}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

const Stat = ({ value, label }: { value: string; label: string }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
      <div className="text-4xl font-bold text-white mb-2">{value}</div>
      <div className="text-gray-300">{label}</div>
    </div>
  );
};
