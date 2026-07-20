import "server-only";

const dictionaries = {
  en: () => import("./en.json").then((module) => module.default),
  pl: () => import("./pl.json").then((module) => module.default),
};

export type SwierszczTranslations = Awaited<ReturnType<typeof getSwierszczTranslations>>;

export const getSwierszczTranslations = async (locale: string) =>
  dictionaries[locale === "pl" ? "pl" : "en"]();
