import "server-only";

const dictionaries = {
  en: () => import("./en.json").then((module) => module.default),
  pl: () => import("./pl.json").then((module) => module.default),
};

export type VitoldTranslations = Awaited<
  ReturnType<typeof getVitoldTranslations>
>;

export const getVitoldTranslations = async (locale: string) =>
  dictionaries[locale === "pl" ? "pl" : "en"]();
