import "server-only";

const dictionaries = {
  en: () => import("./en.json").then((module) => module.default),
  pl: () => import("./pl.json").then((module) => module.default),
};

export type Translations = Awaited<ReturnType<typeof getTranslations>>;

export const getTranslations = async (locale: string) =>
  dictionaries[locale === "pl" ? "pl" : "en"]();
