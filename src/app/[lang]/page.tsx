import Image from "next/image";
import { getTranslations } from "@/translations/common/dictionary";
import { organizationConfig } from "@/config/organization";
import { SectionCard } from "@/components/sections-cards";
import Link from "next/link";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const { hero, about, sections, join, sponsor } = await getTranslations(lang);

  return (
    <div className="flex flex-col w-full bg-gray-950">
      <section className="relative h-[100vh] w-full">
        <Image
          src="/hero.jpeg"
          alt="AGH Solar Plane"
          priority
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-end text-center py-40 px-20">
          <div className="max-w-3xl bg-black/60 px-4 py-8 rounded-lg">
            <h1 className="text-6xl font-bold text-white mb-6">{hero.title}</h1>
            <p className="text-white/90 text-xl md:text-2xl">{hero.subtitle}</p>
            <Link
              href="#about"
              className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg transition-colors backdrop-blur-sm mt-8"
            >
              {hero.cta}
            </Link>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="relative py-24 bg-gradient-to-b from-black via-gray-950 to-gray-900"
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

      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              {sections.title}
            </h2>
            <p className="text-xl text-gray-300">{sections.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(sections.items).map(([key, item], index) => (
              <SectionCard
                key={key}
                title={item.title}
                description={item.description}
                icon={key as keyof typeof sections.items}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="join"
        className="py-32 bg-gradient-to-b from-gray-900 to-gray-950"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{join.title}</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {join.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 text-center">
              <h3 className="text-2xl font-semibold text-white mb-4">
                {join.options.recruitment.title}
              </h3>
              <p className="text-gray-300 mb-6">
                {join.options.recruitment.description}
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href={organizationConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  Instagram
                </a>
                <a
                  href={organizationConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  Facebook
                </a>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 text-center">
              <h3 className="text-2xl font-semibold text-white mb-4">
                {join.options.direct.title}
              </h3>
              <p className="text-gray-300 mb-6">
                {join.options.direct.description}
              </p>
              <a
                href={`mailto:${organizationConfig.contact.generalMail}`}
                className="text-white hover:text-gray-300 transition-colors"
              >
                {organizationConfig.contact.generalMail}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-gray-950 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              {sponsor.title}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {sponsor.description}
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 text-center">
              <h3 className="text-2xl font-semibold text-white mb-4">
                {sponsor.cta.title}
              </h3>
              <p className="text-gray-300 mb-6">{sponsor.cta.description}</p>
              <a
                href={`mailto:${organizationConfig.contact.sponsorMail}`}
                className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors text-lg"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {organizationConfig.contact.sponsorMail}
              </a>
            </div>
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
