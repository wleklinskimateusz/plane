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
    <div className="flex w-full flex-col bg-gray-950">
      <section className="relative h-[100vh] w-full">
        <Image
          src="/hero.jpeg"
          alt="AGH Solar Plane"
          priority
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center px-4 py-40 text-center md:items-end md:px-20">
          <div className="max-w-3xl rounded-lg bg-black/60 px-4 py-8 backdrop-blur-sm md:px-6 md:py-12">
            <h1 className="mb-4 font-serif text-3xl font-bold text-white md:mb-6 md:text-6xl">
              {hero.title}
            </h1>
            <p className="text-sm text-white/90 md:text-2xl">{hero.subtitle}</p>
            <Link
              href="#about"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white/20 px-6 py-3 text-sm text-white backdrop-blur-sm transition-colors hover:bg-white/30 md:mt-8 md:px-8 md:py-4 md:text-lg"
            >
              {hero.cta}
            </Link>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="relative bg-gradient-to-b from-black via-gray-950 to-gray-900 py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mb-8 font-serif text-4xl font-bold text-white">
              {about.title}
            </h2>
            <p className="mx-auto mb-16 max-w-3xl text-xl text-gray-300">
              {about.description}
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
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

      <section className="bg-gray-900 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-serif text-4xl font-bold text-white">
              {sections.title}
            </h2>
            <p className="text-xl text-gray-300">{sections.description}</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
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
        className="bg-gradient-to-b from-gray-900 to-gray-950 py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-serif text-4xl font-bold text-white">
              {join.title}
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-300">
              {join.description}
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-white/5 p-8 text-center backdrop-blur-sm">
              <h3 className="mb-4 text-2xl font-semibold text-white">
                {join.options.recruitment.title}
              </h3>
              <p className="mb-6 text-gray-300">
                {join.options.recruitment.description}
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href={organizationConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-colors hover:text-gray-300"
                >
                  Instagram
                </a>
                <a
                  href={organizationConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-colors hover:text-gray-300"
                >
                  Facebook
                </a>
              </div>
            </div>

            <div className="rounded-lg bg-white/5 p-8 text-center backdrop-blur-sm">
              <h3 className="mb-4 text-2xl font-semibold text-white">
                {join.options.direct.title}
              </h3>
              <p className="mb-6 text-gray-300">
                {join.options.direct.description}
              </p>
              <a
                href={`mailto:${organizationConfig.contact.generalMail}`}
                className="text-white transition-colors hover:text-gray-300"
              >
                {organizationConfig.contact.generalMail}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-gray-950 to-black py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-serif text-4xl font-bold text-white">
              {sponsor.title}
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-300">
              {sponsor.description}
            </p>
          </div>

          <div className="mx-auto max-w-2xl">
            <div className="rounded-lg bg-white/5 p-8 text-center backdrop-blur-sm">
              <h3 className="mb-4 text-2xl font-semibold text-white">
                {sponsor.cta.title}
              </h3>
              <p className="mb-6 text-gray-300">{sponsor.cta.description}</p>
              <a
                href={`mailto:${organizationConfig.contact.sponsorMail}`}
                className="inline-flex items-center gap-2 text-lg text-white transition-colors hover:text-gray-300"
              >
                <svg
                  className="h-5 w-5"
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
    <div className="rounded-lg bg-white/10 p-8 text-center backdrop-blur-sm">
      <div className="mb-2 text-4xl font-bold text-white">{value}</div>
      <div className="text-gray-300">{label}</div>
    </div>
  );
};
